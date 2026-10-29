import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ohqn92bep.css';
import '../../css/u/uku91dbsx.css';
import '../../css/v/v-2w818av.css';
import '../../css/j/jgka1gbzk.css';
import '../../css/q/q5w1fnujt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ohqn92bep"/><path class="uku91dbsx wm-a"/><path class="v-2w818av wm-a"/><path class="jgka1gbzk"/><path class="q5w1fnujt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pill-bottle-duo"} {...others} />);
}

export default Component;
