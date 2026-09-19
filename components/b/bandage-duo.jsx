import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqkrw7bsc.css';
import '../../css/j/j5l-veb0o.css';
import '../../css/a/a_-u3wbhb.css';
import '../../css/f/f5f_y32dh.css';
import '../../css/s/sesfo_h_l.css';
import '../../css/o/omhs_ncix.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="mqkrw7bsc"/><path class="j5l-veb0o"/><path class="a_-u3wbhb"/><path class="f5f_y32dh"/><path class="sesfo_h_l"/><path class="omhs_ncix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bandage-duo"} {...others} />);
}

export default Component;
