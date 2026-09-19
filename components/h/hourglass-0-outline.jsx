import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow1pw5b1d.css';
import '../../css/z/zb6zeabax.css';
import '../../css/o/o3-x_ssyy.css';
import '../../css/v/vgjyz8brv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ow1pw5b1d"/><path clip-rule="evenodd" class="zb6zeabax"/><path class="o3-x_ssyy"/><path clip-rule="evenodd" class="vgjyz8brv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hourglass-0-outline"} {...others} />);
}

export default Component;
