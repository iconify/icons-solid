import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/plqr-gm0h.css';
import '../../css/w/wswfnmbfz.css';
import '../../css/k/k4d_-doxe.css';
import '../../css/y/yk6ygd-2x.css';
import '../../css/g/ghn_xobtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="plqr-gm0h"/><path class="wswfnmbfz"/><path class="k4d_-doxe"/><path class="yk6ygd-2x"/><path class="ghn_xobtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:electronics-capacitor"} {...others} />);
}

export default Component;
