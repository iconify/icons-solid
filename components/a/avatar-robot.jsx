import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs335acpy.css';
import '../../css/j/j8068vl6o.css';
import '../../css/r/rpe4mtbzn.css';
import '../../css/q/q2if18ekx.css';
import '../../css/f/fyz9ecqbo.css';
import '../../css/n/nu6yi2bim.css';
import '../../css/j/jp_8po7id.css';
import '../../css/e/elj_4wz7s.css';
import '../../css/c/cbmo9pb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="fs335acpy"><path class="j8068vl6o wm-shadow"/><path class="rpe4mtbzn wm-a"/><path class="q2if18ekx wm-a"/><path class="fyz9ecqbo wm-k"/><path class="nu6yi2bim wm-k"/><path class="jp_8po7id wm-k"/><path class="elj_4wz7s wm-k"/><path class="cbmo9pb6p wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-robot"} {...others} />);
}

export default Component;
