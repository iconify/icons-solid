import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khq2vx_5t.css';
import '../../css/h/hr5o_kbdf.css';
import '../../css/b/bpq47ib3p.css';
import '../../css/c/c3d46eb9c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="khq2vx_5t"/><path clip-rule="evenodd" class="hr5o_kbdf"/><path class="bpq47ib3p"/><path clip-rule="evenodd" class="c3d46eb9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-numeric-up-outline"} {...others} />);
}

export default Component;
