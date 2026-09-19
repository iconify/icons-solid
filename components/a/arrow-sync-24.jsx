import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-ok5027y.css';
import '../../css/n/newr62bds.css';
import '../../css/d/d3eqnjbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGMOoevdfY)" class="l-ok5027y"/><defs><linearGradient id="SVGMOoevdfY" x1="16.8" x2="7.2" y1="19.475" y2=".5" gradientUnits="userSpaceOnUse"><stop class="newr62bds"/><stop offset="1" class="d3eqnjbjz"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:arrow-sync-24"} {...others} />);
}

export default Component;
