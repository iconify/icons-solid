import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wx_3q-bka.css';
import '../../css/k/kft13bcfg.css';
import '../../css/y/y8s0ycc7h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wx_3q-bka"/><path class="kft13bcfg"/><path class="y8s0ycc7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-damage-duo"} {...others} />);
}

export default Component;
