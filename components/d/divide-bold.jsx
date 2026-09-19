import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/l/ln7cyvcfw.css';
import '../../css/z/z2xr0pb1c.css';
import '../../css/w/wpmk60uqr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="ln7cyvcfw"/><rect class="z2xr0pb1c"/><rect class="wpmk60uqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:divide-bold"} {...others} />);
}

export default Component;
