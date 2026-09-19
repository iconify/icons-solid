import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vvqv5lwim.css';
import '../../css/q/q0szhybqg.css';
import '../../css/a/ae27accfy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vvqv5lwim"/><path class="q0szhybqg"/><path class="ae27accfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:spa-candle"} {...others} />);
}

export default Component;
