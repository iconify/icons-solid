import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ih5ozlbgy.css';
import '../../css/t/tmvc5lbma.css';
import '../../css/c/co407c62o.css';
import '../../css/i/i7g8jgxjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ih5ozlbgy wm-deco"/><path class="tmvc5lbma wm-deco"/><path class="co407c62o wm-deco"/><path class="i7g8jgxjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stethoscope-blueprint"} {...others} />);
}

export default Component;
