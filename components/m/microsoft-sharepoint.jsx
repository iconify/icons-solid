import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tslpbwr9j.css';
import '../../css/g/ghk1fy7tg.css';
import '../../css/c/cw07w5b8l.css';
import '../../css/g/gb8c6nbnl.css';
import '../../css/k/krzl31joz.css';
import '../../css/e/ejik6n2qz.css';
import '../../css/t/ta16gtlyh.css';
import '../../css/o/ob94inopb.css';
import '../../css/z/zuw-l3bit.css';
import '../../css/y/ybgabjg6s.css';
import '../../css/u/u8hql9bmj.css';
import '../../css/i/igdfbab3o.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="tslpbwr9j"/><circle class="ghk1fy7tg"/><circle class="cw07w5b8l"/><path class="gb8c6nbnl"/><path class="krzl31joz"/><path class="ejik6n2qz"/><path class="ta16gtlyh"/><linearGradient id="SVGTTYJ8bNu" x1="45.489" x2="216.395" y1="1562.036" y2="1266.033" gradientTransform="matrix(1 0 0 -1 0 1670)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ob94inopb"/><stop offset=".5" class="zuw-l3bit"/><stop offset="1" class="ybgabjg6s"/></linearGradient><path fill="url(#SVGTTYJ8bNu)" class="u8hql9bmj"/><path class="igdfbab3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-sharepoint"} {...others} />);
}

export default Component;
