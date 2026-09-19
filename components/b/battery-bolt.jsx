import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qkt_ili7a.css';
import '../../css/c/cm2jel-sd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="qkt_ili7a"/><path class="cm2jel-sd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-bolt"} {...others} />);
}

export default Component;
