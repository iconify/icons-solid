import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xt8prr-vz.css';
import '../../css/l/l30trxlkg.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/b/bxegrmbjp.css';
import '../../css/x/xowgfxbjw.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGWDmXbdck)" class="xt8prr-vz"/><path fill="url(#SVG4Qw3OSCP)" class="l30trxlkg"/><defs><linearGradient id="SVGWDmXbdck" x1="5.346" x2="34.389" y1="19.25" y2="7.689" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset=".445" class="bxegrmbjp"/><stop offset=".957" class="xowgfxbjw"/></linearGradient><linearGradient id="SVG4Qw3OSCP" x1="26.563" x2="3.809" y1="4.625" y2="38.505" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:data-trending-32"} {...others} />);
}

export default Component;
