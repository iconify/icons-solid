import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puwsyacrn.css';
import '../../css/s/sjo379-6q.css';
import '../../css/q/q-vb2ubei.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="puwsyacrn"/><path class="sjo379-6q"/><path class="q-vb2ubei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:sail-ship"} {...others} />);
}

export default Component;
