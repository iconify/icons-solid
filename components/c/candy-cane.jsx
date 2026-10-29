import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kc3gkdbzj.css';
import '../../css/z/zyzkrebsi.css';
import '../../css/p/pn5p_4bad.css';
import '../../css/j/jnylkqbmu.css';
import '../../css/d/dtqicdcih.css';
import '../../css/j/jz4ai8brd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kc3gkdbzj wm-k"/><path class="wm-k zyzkrebsi"/><path class="pn5p_4bad wm-k"/><path class="jnylkqbmu wm-k"/><path class="dtqicdcih wm-shine"/><path class="jz4ai8brd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:candy-cane"} {...others} />);
}

export default Component;
