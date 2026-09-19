import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g238lbc0h.css';
import '../../css/m/mj5ubmb6f.css';
import '../../css/u/us6cp2b0l.css';
import '../../css/y/ym8penlgk.css';
import '../../css/h/heqgmhken.css';
import '../../css/o/o83_pnvzi.css';
import '../../css/m/ml6mgsdju.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGIRbAbbIU)" class="g238lbc0h"/><path fill="url(#SVGK2yQpb1K)" class="mj5ubmb6f"/><defs><linearGradient id="SVGIRbAbbIU" x1="14.778" x2="34.52" y1="6" y2="42" gradientUnits="userSpaceOnUse"><stop offset=".028" class="us6cp2b0l"/><stop offset=".438" class="ym8penlgk"/><stop offset="1" class="heqgmhken"/></linearGradient><linearGradient id="SVGK2yQpb1K" x1="17.165" x2="28.034" y1="15.692" y2="42.785" gradientUnits="userSpaceOnUse"><stop class="o83_pnvzi"/><stop offset="1" class="ml6mgsdju"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:code-block-48"} {...others} />);
}

export default Component;
