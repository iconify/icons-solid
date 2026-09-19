import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q_486obvc.css';
import '../../css/i/ittn3-bdv.css';
import '../../css/d/duuvhq7gr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path clip-rule="evenodd" class="q_486obvc"/><path class="ittn3-bdv"/><path class="duuvhq7gr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mouse"} {...others} />);
}

export default Component;
