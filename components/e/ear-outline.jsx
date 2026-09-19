import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oum1-k3bs.css';
import '../../css/m/mwtu4unnv.css';
import '../../css/k/kgo_0dbpa.css';
import '../../css/o/o3uhfacov.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="oum1-k3bs"/><path class="mwtu4unnv"/><path class="kgo_0dbpa"/><path class="o3uhfacov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ear-outline"} {...others} />);
}

export default Component;
