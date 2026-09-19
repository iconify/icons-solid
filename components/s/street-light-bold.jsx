import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/c/cx9zm_rlh.css';
import '../../css/m/m8ofd8byy.css';
import '../../css/b/bn-g92bbr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="cx9zm_rlh"/><path class="m8ofd8byy"/><path class="bn-g92bbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:street-light-bold"} {...others} />);
}

export default Component;
