import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s0muxwpfo.css';
import '../../css/y/y3i7eq1mc.css';
import '../../css/r/ryc13abwb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="s0muxwpfo"/><path class="y3i7eq1mc"/><path class="ryc13abwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:park"} {...others} />);
}

export default Component;
