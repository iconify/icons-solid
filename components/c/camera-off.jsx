import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k0l633lzq.css';
import '../../css/k/ks996k63l.css';
import '../../css/z/z4dxnbbml.css';
import '../../css/y/yd1-_qbdi.css';
import '../../css/k/kajlvyf4t.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="k0l633lzq"/><path class="ks996k63l wm-shine"/><path class="wm-k z4dxnbbml"/><path class="wm-a yd1-_qbdi"/><path class="kajlvyf4t wm-s"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:camera-off"} {...others} />);
}

export default Component;
