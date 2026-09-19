import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/low48muva.css';
import '../../css/v/vg2o4-bop.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="low48muva"/><path class="vg2o4-bop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:toggle-1"} {...others} />);
}

export default Component;
