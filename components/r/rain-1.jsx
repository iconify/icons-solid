import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hf38sfcoo.css';
import '../../css/v/vxy8sab_q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="hf38sfcoo"/><path class="vxy8sab_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rain-1"} {...others} />);
}

export default Component;
