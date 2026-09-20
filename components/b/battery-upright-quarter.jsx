import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdxbrgclq.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="bdxbrgclq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:battery-upright-quarter"} {...others} />);
}

export default Component;
