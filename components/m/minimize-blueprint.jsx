import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rj9jvq5qh.css';
import '../../css/b/bxjv56brc.css';
import '../../css/t/trt38b28x.css';
import '../../css/n/nctgfsyvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rj9jvq5qh wm-deco"/><path class="bxjv56brc wm-deco"/><path class="trt38b28x"/><path class="nctgfsyvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minimize-blueprint"} {...others} />);
}

export default Component;
