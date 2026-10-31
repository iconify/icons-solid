import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s1uw2-brt.css';
import '../../css/t/tx0ntfbaf.css';
import '../../css/f/flghe58zp.css';
import '../../css/r/rg822gb7d.css';
import '../../css/n/n--daxb6h.css';
import '../../css/o/oyhku1ogo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="s1uw2-brt wm-shadow"/><path class="tx0ntfbaf"/><path class="flghe58zp"/><path class="rg822gb7d"/><path class="n--daxb6h"/><path class="oyhku1ogo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:fuel"} {...others} />);
}

export default Component;
