import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lv_u3fbwv.css';
import '../../css/b/bej_0fbfn.css';
import '../../css/x/xlot_0bem.css';
import '../../css/m/mvtnklbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lv_u3fbwv"/><path class="bej_0fbfn"/><circle class="xlot_0bem"/><path class="mvtnklbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:camera-image-duotone"} {...others} />);
}

export default Component;
