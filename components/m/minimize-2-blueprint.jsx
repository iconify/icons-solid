import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iacwg347f.css';
import '../../css/b/bxjv56brc.css';
import '../../css/z/znxjuv-vy.css';
import '../../css/z/z11iafbez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="iacwg347f wm-deco"/><path class="bxjv56brc wm-deco"/><path class="znxjuv-vy"/><path class="z11iafbez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minimize-2-blueprint"} {...others} />);
}

export default Component;
