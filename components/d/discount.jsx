import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wbvrsl42y.css';
import '../../css/m/mp2fedcut.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="wbvrsl42y"/><path class="mp2fedcut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:discount"} {...others} />);
}

export default Component;
