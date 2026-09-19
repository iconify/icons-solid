import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjzbjlbks.css';
import '../../css/g/g3qtgcpih.css';
import '../../css/p/pestg6bls.css';
import '../../css/p/ps7trjwfg.css';
import '../../css/o/o83_pnvzi.css';
import '../../css/k/kx5fkyhqd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGVW6Ulb6I)" class="rjzbjlbks"/><path fill="url(#SVGefcnreaF)" class="g3qtgcpih"/><defs><linearGradient id="SVGVW6Ulb6I" x1="3.875" x2="13" y1="2.75" y2="16" gradientUnits="userSpaceOnUse"><stop class="pestg6bls"/><stop offset="1" class="ps7trjwfg"/></linearGradient><linearGradient id="SVGefcnreaF" x1="6.011" x2="8.354" y1="8.199" y2="10.635" gradientUnits="userSpaceOnUse"><stop class="o83_pnvzi"/><stop offset="1" class="kx5fkyhqd"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:dismiss-circle-16"} {...others} />);
}

export default Component;
