import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dlv04_obq.css';
import '../../css/i/isr3kgbzn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="dlv04_obq"/><path class="isr3kgbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:head-side-mask"} {...others} />);
}

export default Component;
