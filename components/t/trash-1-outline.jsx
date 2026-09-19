import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkt0tm_pc.css';
import '../../css/s/swm4sl8ha.css';
import '../../css/o/orier7xvr.css';
import '../../css/o/oqkwxkbed.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nkt0tm_pc"/><path clip-rule="evenodd" class="swm4sl8ha"/><path class="orier7xvr"/><path clip-rule="evenodd" class="oqkwxkbed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:trash-1-outline"} {...others} />);
}

export default Component;
