import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gdor4w2zf.css';
import '../../css/y/yo65-cb-m.css';
import '../../css/n/n16la8pke.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="gdor4w2zf"/><path class="yo65-cb-m"/><path class="n16la8pke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-pie"} {...others} />);
}

export default Component;
