import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6s6p9r1w.css';
import '../../css/e/effisz2bi.css';
import '../../css/o/oiqdnp90t.css';
import '../../css/j/j3f6i8bmr.css';
import '../../css/w/wdy104bhr.css';
import '../../css/h/hnenyfb4h.css';
import '../../css/s/s1n88ybmv.css';
import '../../css/f/fhkbepiex.css';
import '../../css/a/avvl4wbts.css';
import '../../css/m/m-laajaqr.css';
import '../../css/s/s19l0d2yg.css';
import '../../css/i/i-7kxpc8x.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="k6s6p9r1w"/><defs><circle id="SVGifCBlePx" class="effisz2bi"/></defs><clipPath id="SVGtcVZrdEc"><use href="#SVGifCBlePx"/></clipPath><g clip-path="url(#SVGtcVZrdEc)"><path class="oiqdnp90t"/><path class="j3f6i8bmr"/><path class="wdy104bhr"/><path class="hnenyfb4h"/><path class="s1n88ybmv"/><path class="fhkbepiex"/><path class="avvl4wbts"/><path class="m-laajaqr"/><path class="s19l0d2yg"/><path class="i-7kxpc8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:support"} {...others} />);
}

export default Component;
