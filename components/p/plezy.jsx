import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2j3ccbcd.css';
import '../../css/q/qd5ssxb2y.css';
import '../../css/q/qy9_b6x2j.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGSspBYc8y" x1="55.626" x2="285.029" y1="10.002" y2="407.348" gradientTransform="matrix(1 0 0 -1 0 514.14)" gradientUnits="userSpaceOnUse"><stop offset="0" class="i2j3ccbcd"/><stop offset="1" class="qd5ssxb2y"/></linearGradient><path fill="url(#SVGSspBYc8y)" class="qy9_b6x2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plezy"} {...others} />);
}

export default Component;
