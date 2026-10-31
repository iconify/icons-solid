import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e4w2urwxq.css';
import '../../css/n/nsn91h2yl.css';
import '../../css/u/us-a_n24g.css';
import '../../css/v/vc4lpfjrj.css';
import '../../css/p/pklvoochx.css';
import '../../css/o/of545gbwe.css';
import '../../css/f/ftjrkcchd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e4w2urwxq wm-shadow"/><path class="nsn91h2yl"/><path class="us-a_n24g"/><path class="vc4lpfjrj"/><path class="pklvoochx wm-s"/><path class="of545gbwe wm-s"/><path class="ftjrkcchd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:piggy-bank"} {...others} />);
}

export default Component;
