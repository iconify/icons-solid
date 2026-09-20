import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/j/j--jdvwxx.css';
import '../../css/x/x25jvtj5r.css';
import '../../css/i/izvkx3max.css';
import '../../css/e/e1igagcyf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="j--jdvwxx"/><path class="x25jvtj5r"/><path class="izvkx3max"/><path class="e1igagcyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-generate-voice-robot-2"} {...others} />);
}

export default Component;
