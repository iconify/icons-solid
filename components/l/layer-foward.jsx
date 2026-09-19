import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vdylckbjl.css';
import '../../css/s/sg_jh5bes.css';
import '../../css/a/aeiq-e9ld.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="vdylckbjl"/><path class="sg_jh5bes"/><path class="aeiq-e9ld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-foward"} {...others} />);
}

export default Component;
