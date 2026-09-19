import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swr84yb6f.css';
import '../../css/h/hn5zmzb1j.css';
import '../../css/m/mk5yu_unr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="swr84yb6f"/><path class="hn5zmzb1j"/><path class="mk5yu_unr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:canoe-1-duo"} {...others} />);
}

export default Component;
