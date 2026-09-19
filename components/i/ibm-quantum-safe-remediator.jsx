import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf0p2l6ud.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yf0p2l6ud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-quantum-safe-remediator"} {...others} />);
}

export default Component;
