import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vw1tldbhd.css';
import '../../css/s/sf5mdsb0e.css';
import '../../css/k/kgz32_haf.css';
import '../../css/r/rpew0wbce.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vw1tldbhd"/><path class="sf5mdsb0e"/><path class="kgz32_haf"/><path class="rpew0wbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wind-outline"} {...others} />);
}

export default Component;
