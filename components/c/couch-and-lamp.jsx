import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8qtzdb_g.css';
import '../../css/r/rs2-o3b8y.css';
import '../../css/d/d48mzabin.css';
import '../../css/l/lqg73ql1z.css';
import '../../css/s/st5c8jstm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="d8qtzdb_g"/><path class="rs2-o3b8y"/><path class="d48mzabin"/><path class="lqg73ql1z"/><path class="st5c8jstm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:couch-and-lamp"} {...others} />);
}

export default Component;
