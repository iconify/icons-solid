import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/ksso_xfmr.css';
import '../../css/q/qysl9rb8l.css';
import '../../css/b/bel2kzo2b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ksso_xfmr"/><path class="qysl9rb8l"/><path class="bel2kzo2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-damage"} {...others} />);
}

export default Component;
