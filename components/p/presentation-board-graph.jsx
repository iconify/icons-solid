import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/edoeo393m.css';
import '../../css/d/dmj85zb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="edoeo393m"/><path class="dmj85zb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:presentation-board-graph"} {...others} />);
}

export default Component;
