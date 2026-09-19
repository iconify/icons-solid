import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mk_pnxbej.css';
import '../../css/n/nhmln6bau.css';
import '../../css/x/xofm-lbrq.css';
import '../../css/l/lj2ryhrph.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mk_pnxbej"/><path class="nhmln6bau"/><path class="xofm-lbrq"/><path class="lj2ryhrph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:farm-outline"} {...others} />);
}

export default Component;
