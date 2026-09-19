import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j25u37b0j.css';
import '../../css/o/ovoj6q4ie.css';
import '../../css/e/ecgtjz5jo.css';
import '../../css/i/itd292bhm.css';
import '../../css/w/wjpv4sdph.css';
import '../../css/m/m1r343cqu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j25u37b0j"/><path class="ovoj6q4ie"/><path clip-rule="evenodd" class="ecgtjz5jo"/><path class="itd292bhm"/><path class="wjpv4sdph"/><path class="m1r343cqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-bold"} {...others} />);
}

export default Component;
