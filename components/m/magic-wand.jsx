import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx5q9rb2y.css';
import '../../css/q/q_rb-ac_u.css';
import '../../css/w/wqyx4hlih.css';
import '../../css/r/rwdb---rg.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/e/e44gerbxe.css';
import '../../css/r/r-2r_gn9a.css';
import '../../css/p/p6ded_b9z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yx5q9rb2y"/><path class="q_rb-ac_u"/><circle class="wqyx4hlih"/><circle class="rwdb---rg"/><g class="x8poo_bjf"><rect transform="rotate(-45.07 35.956 36.04)" class="e44gerbxe"/><path class="r-2r_gn9a"/><path class="p6ded_b9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:magic-wand"} {...others} />);
}

export default Component;
