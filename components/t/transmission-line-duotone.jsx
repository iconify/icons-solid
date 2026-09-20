import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p5qqdijym.css';
import '../../css/x/xnvv0pb9e.css';
import '../../css/u/uqdxll9yb.css';
import '../../css/n/nborjbb0w.css';
import '../../css/q/qoc2w7prb.css';
import '../../css/q/qwahrfbri.css';
import '../../css/j/jpukyobyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p5qqdijym"/><path class="xnvv0pb9e"/><path class="uqdxll9yb"/><path class="nborjbb0w"/><path class="qoc2w7prb"/><path class="qwahrfbri"/><path class="jpukyobyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transmission-line-duotone"} {...others} />);
}

export default Component;
