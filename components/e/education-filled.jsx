import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zee_p2c7i.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zee_p2c7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:education-filled"} {...others} />);
}

export default Component;
