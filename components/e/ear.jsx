import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/c58gb9bzo.css';
import '../../css/n/n2ji6_bqs.css';
import '../../css/a/au72q8eog.css';
import '../../css/t/tz7u2fbuv.css';
import '../../css/a/a58-nzx4n.css';
import '../../css/e/edpk9yb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGaGwgPdmv" x1="9.75" x2="15.75" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGaGwgPdmv)" class="c58gb9bzo"/><path class="n2ji6_bqs wm-shine"/><path class="au72q8eog wm-shine"/><path class="tz7u2fbuv wm-shine"/><path class="a58-nzx4n wm-shine"/><path class="edpk9yb9d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:ear"} {...others} />);
}

export default Component;
