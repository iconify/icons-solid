import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eyrt5yb7l.css';
import '../../css/o/ou_oi1b_j.css';
import '../../css/q/qhdghc5-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eyrt5yb7l"/><path class="ou_oi1b_j"/><path class="qhdghc5-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:curves-levels-graph"} {...others} />);
}

export default Component;
