import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0cex0bzv.css';
import '../../css/k/kg1jrmbzn.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/c/c8pavbbjd.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/y8pwr279m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGxy70neug)" class="i0cex0bzv"/><path fill="url(#SVGK4knlKzl)" class="kg1jrmbzn"/><defs><linearGradient id="SVGxy70neug" x1="3.929" x2="24.357" y1="7.875" y2="24.125" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="c8pavbbjd"/></linearGradient><linearGradient id="SVGK4knlKzl" x1="11.692" x2="23" y1="10.077" y2="34.577" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="y8pwr279m"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:arrow-square-down-32"} {...others} />);
}

export default Component;
