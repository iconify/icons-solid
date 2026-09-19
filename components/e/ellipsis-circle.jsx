import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wc2k_3bib.css';
import '../../css/f/f_5j5hbbh.css';
import '../../css/y/yn91wp2qf.css';
import '../../css/h/ho6q2_ixk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wc2k_3bib"/><rect class="f_5j5hbbh"/><rect class="yn91wp2qf"/><rect class="ho6q2_ixk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:ellipsis-circle"} {...others} />);
}

export default Component;
