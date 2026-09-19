import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mj9b5m6rh.css';
import '../../css/p/pjmjv_b-e.css';
import '../../css/v/vrai7hbra.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="mj9b5m6rh"/><path class="pjmjv_b-e"/><path class="vrai7hbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:copy"} {...others} />);
}

export default Component;
