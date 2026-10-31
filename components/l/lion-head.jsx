import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/b/bf8l9nbbn.css';
import '../../css/o/or1m_ccgz.css';
import '../../css/u/uzidm3fki.css';
import '../../css/j/juq41cb5y.css';
import '../../css/s/s7c9lmmxf.css';
import '../../css/r/rlpc0qh6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG43uBTcPC" x1="9" x2="15" y1="1.27" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="bf8l9nbbn wm-s"/><path fill="url(#SVG43uBTcPC)" class="or1m_ccgz"/><path class="uzidm3fki wm-s"/><path class="juq41cb5y wm-shine"/><path class="s7c9lmmxf wm-shine"/><path class="rlpc0qh6h wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:lion-head"} {...others} />);
}

export default Component;
