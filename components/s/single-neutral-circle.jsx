import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fn4dwmv5m.css';
import '../../css/p/pvtrflb0y.css';
import '../../css/c/cpdtww-0s.css';
import '../../css/n/n046zebde.css';
import '../../css/d/ds60a1j7p.css';
import '../../css/o/oh53hwptf.css';
import '../../css/x/xa0yw0btx.css';
import '../../css/n/n37t6ph_h.css';
import '../../css/r/rkq7mdghu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fn4dwmv5m"/><path class="pvtrflb0y"/><path class="cpdtww-0s"/><path class="n046zebde"/><path class="ds60a1j7p"/><path class="oh53hwptf"/><path class="xa0yw0btx"/><path class="n37t6ph_h"/><path class="rkq7mdghu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:single-neutral-circle"} {...others} />);
}

export default Component;
