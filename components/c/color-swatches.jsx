import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2c03vama.css';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c9h_odl5t.css';
import '../../css/g/g2xpnlmba.css';
import '../../css/v/vhq14dbsy.css';
import '../../css/c/cxd4qz81m.css';

const viewBox = {"width":14,"height":14};
const content = `<defs><path id="SVGkiI0ocxK" class="n2c03vama"/></defs><g class="y9tr6bcfx"><path class="c9h_odl5t"/><path class="g2xpnlmba"/><path class="vhq14dbsy"/><use href="#SVGkiI0ocxK"/><use href="#SVGkiI0ocxK"/><path class="cxd4qz81m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:color-swatches"} {...others} />);
}

export default Component;
