import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0ojbob9k.css';
import '../../css/f/f5g4hi_ai.css';
import '../../css/m/m5vgfdp6g.css';
import '../../css/t/tlrcbouog.css';
import '../../css/o/o_kwn9jdy.css';
import '../../css/m/mo-73hi-v.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path class="x0ojbob9k"/><path class="f5g4hi_ai"/><path class="m5vgfdp6g"/><path class="tlrcbouog"/><path class="o_kwn9jdy"/><path class="mo-73hi-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:text-bubbles"} {...others} />);
}

export default Component;
