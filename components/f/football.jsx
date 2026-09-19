import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b08in11er.css';
import '../../css/g/glqilnb0t.css';
import '../../css/f/fpdfbsb2s.css';
import '../../css/q/q6xa19qpi.css';
import '../../css/h/h1f00acvg.css';
import '../../css/l/lyin8cm3s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="b08in11er"/><path class="glqilnb0t"/><path class="fpdfbsb2s"/><path class="q6xa19qpi"/><path class="h1f00acvg"/><path class="lyin8cm3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:football"} {...others} />);
}

export default Component;
