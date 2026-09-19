import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gci1exbgs.css';
import '../../css/c/cc9jmybaq.css';
import '../../css/n/n_7ow22tr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="gci1exbgs"/><path class="cc9jmybaq"/><path class="n_7ow22tr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:canoe-1"} {...others} />);
}

export default Component;
