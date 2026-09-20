import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1v8eu0tg.css';
import '../../css/s/sg4h_5j8x.css';
import '../../css/x/x7ews-thn.css';
import '../../css/t/tpnbajufx.css';
import '../../css/z/zkzq1bbbk.css';
import '../../css/h/he_ubmi5s.css';
import '../../css/v/vauhmbbyu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="j1v8eu0tg"/><path class="sg4h_5j8x"/><path class="x7ews-thn"/><path class="tpnbajufx"/><path class="zkzq1bbbk"/><path class="he_ubmi5s"/><path class="vauhmbbyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-generate-landscape-image-spark"} {...others} />);
}

export default Component;
