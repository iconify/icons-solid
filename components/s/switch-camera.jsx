import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k0l633lzq.css';
import '../../css/p/pcvtdcbzi.css';
import '../../css/z/z4dxnbbml.css';
import '../../css/d/dx_i7nbqp.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="k0l633lzq"/><path class="pcvtdcbzi wm-shine"/><path class="wm-k z4dxnbbml"/><path class="dx_i7nbqp wm-a"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:switch-camera"} {...others} />);
}

export default Component;
