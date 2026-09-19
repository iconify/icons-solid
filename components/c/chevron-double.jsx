import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pno4gmb4n.css';
import '../../css/t/tgau90b0h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="pno4gmb4n"/><path class="tgau90b0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chevron-double"} {...others} />);
}

export default Component;
