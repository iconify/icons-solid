import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd3od2-zf.css';
import '../../css/e/evv8tz29n.css';
import '../../css/n/npphhda2s.css';
import '../../css/x/xw_ykbbuu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rd3od2-zf"/><path clip-rule="evenodd" class="evv8tz29n"/><path class="npphhda2s"/><path clip-rule="evenodd" class="xw_ykbbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:industry-outline"} {...others} />);
}

export default Component;
