import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j05bqhb7c.css';
import '../../css/f/f-pr2tbsk.css';
import '../../css/m/marjsu4my.css';
import '../../css/i/ip_t4cckk.css';
import '../../css/n/n26yrdbyt.css';
import '../../css/y/yr86fbccv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j05bqhb7c"/><path class="f-pr2tbsk"/><path class="marjsu4my"/><path class="ip_t4cckk"/><path class="n26yrdbyt"/><path class="yr86fbccv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-edit-split"} {...others} />);
}

export default Component;
