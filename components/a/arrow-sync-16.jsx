import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igrvfacnz.css';
import '../../css/n/newr62bds.css';
import '../../css/d/d3eqnjbjz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGWveWABmq)" class="igrvfacnz"/><defs><linearGradient id="SVGWveWABmq" x1="11.2" x2="4.8" y1="13.037" y2=".25" gradientUnits="userSpaceOnUse"><stop class="newr62bds"/><stop offset="1" class="d3eqnjbjz"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:arrow-sync-16"} {...others} />);
}

export default Component;
