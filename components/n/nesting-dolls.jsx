import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_awwhbsz.css';
import '../../css/w/wd2pj-bik.css';
import '../../css/r/rmg5bh0_z.css';
import '../../css/a/a_8zlfbnd.css';
import '../../css/m/m_9zkacas.css';
import '../../css/q/qa3f0lhdg.css';
import '../../css/a/a-jshoz-r.css';
import '../../css/m/mbz-jz3sp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="o_awwhbsz"/><path class="wd2pj-bik"/><path class="rmg5bh0_z"/><path class="a_8zlfbnd"/><path class="m_9zkacas"/><path class="qa3f0lhdg"/><path class="a-jshoz-r"/><path class="mbz-jz3sp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:nesting-dolls"} {...others} />);
}

export default Component;
