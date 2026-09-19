import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fevox3bea.css';
import '../../css/t/tg0_5mapb.css';
import '../../css/g/gk8gx7whk.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/a/alyihb0gj.css';
import '../../css/w/wk_lp_wlk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGB1U6md2w)" class="fevox3bea"/><path fill="url(#SVGw3mPbbnq)" class="tg0_5mapb"/><defs><linearGradient id="SVGB1U6md2w" x1="10.25" x2="36.5" y1="-2.25" y2="47.75" gradientUnits="userSpaceOnUse"><stop class="gk8gx7whk"/><stop offset="1" class="h0zqot9pw"/></linearGradient><linearGradient id="SVGw3mPbbnq" x1="18.667" x2="29.067" y1="13" y2="34.131" gradientUnits="userSpaceOnUse"><stop class="alyihb0gj"/><stop offset="1" class="wk_lp_wlk"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:error-circle-48"} {...others} />);
}

export default Component;
