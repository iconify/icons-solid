import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/ncr4y8hbl.css';
import '../../css/z/ze5g_h5ii.css';
import '../../css/d/d6uq56b0l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ncr4y8hbl"/><path class="ze5g_h5ii"/><path class="d6uq56b0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-group"} {...others} />);
}

export default Component;
