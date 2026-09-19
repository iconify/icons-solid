import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qn_jpfb3s.css';

const viewBox = {"width":1024,"height":830};
const content = `<path class="qn_jpfb3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:checkmark"} {...others} />);
}

export default Component;
