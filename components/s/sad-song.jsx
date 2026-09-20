import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9rin0k7m.css';
import '../../css/h/h5p37ac0l.css';
import '../../css/f/f26472bmr.css';
import '../../css/t/tam0mqgff.css';
import '../../css/k/kqvlgvbmy.css';
import '../../css/q/q2j5wwxfe.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="g9rin0k7m"/><path class="h5p37ac0l"/><path class="f26472bmr"/><path class="tam0mqgff"/><path class="kqvlgvbmy"/><path class="q2j5wwxfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:sad-song"} {...others} />);
}

export default Component;
