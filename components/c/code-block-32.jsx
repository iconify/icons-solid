import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0cex0bzv.css';
import '../../css/n/n5uv5ccou.css';
import '../../css/u/us6cp2b0l.css';
import '../../css/y/ym8penlgk.css';
import '../../css/h/heqgmhken.css';
import '../../css/o/o83_pnvzi.css';
import '../../css/m/ml6mgsdju.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGKMP4wbwV)" class="i0cex0bzv"/><path fill="url(#SVGS7f4RcCe)" class="n5uv5ccou"/><defs><linearGradient id="SVGKMP4wbwV" x1="9.339" x2="23.598" y1="3" y2="29" gradientUnits="userSpaceOnUse"><stop offset=".028" class="us6cp2b0l"/><stop offset=".438" class="ym8penlgk"/><stop offset="1" class="heqgmhken"/></linearGradient><linearGradient id="SVGS7f4RcCe" x1="11.268" x2="18.317" y1="10.462" y2="28.708" gradientUnits="userSpaceOnUse"><stop class="o83_pnvzi"/><stop offset="1" class="ml6mgsdju"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:code-block-32"} {...others} />);
}

export default Component;
