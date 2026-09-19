import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wr7o_k_0x.css';
import '../../css/g/ggoluzbtq.css';
import '../../css/n/nv0qqmb2k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wr7o_k_0x"/><path clip-rule="evenodd" class="ggoluzbtq"/><path class="nv0qqmb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pin"} {...others} />);
}

export default Component;
