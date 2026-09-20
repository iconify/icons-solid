import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnlevi9fk.css';
import '../../css/a/aanitn30d.css';
import '../../css/z/zaxwpyb8k.css';
import '../../css/z/zz333hbei.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG2Vhxmcaw" x1="-701.502" x2="-700.359" y1="796.44" y2="795.297" gradientTransform="matrix(448 0 0 -448 314273 356805)" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnlevi9fk"/><stop offset="1" class="aanitn30d"/></linearGradient><path fill="url(#SVG2Vhxmcaw)" class="zaxwpyb8k"/><path class="zz333hbei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:timetracker"} {...others} />);
}

export default Component;
