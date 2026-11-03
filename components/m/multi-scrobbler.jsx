import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynsy5g-wh.css';
import '../../css/w/wjoeyx4qk.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ynsy5g-wh"/><path class="wjoeyx4qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:multi-scrobbler"} {...others} />);
}

export default Component;
