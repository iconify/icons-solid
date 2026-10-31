import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qk_eambxp.css';
import '../../css/i/irpj-obto.css';
import '../../css/f/fcf1dgc7h.css';
import '../../css/e/eptgwdb8x.css';
import '../../css/p/pp_dk5b6t.css';
import '../../css/q/qvz36hl6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qk_eambxp wm-shadow"/><path class="irpj-obto"/><path class="fcf1dgc7h"/><path class="eptgwdb8x"/><path class="pp_dk5b6t"/><path class="qvz36hl6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:candy-cane"} {...others} />);
}

export default Component;
