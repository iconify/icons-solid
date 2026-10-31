import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o31ue_bnk.css';
import '../../css/x/xo92ezbpx.css';
import '../../css/p/p9ft05bsh.css';
import '../../css/j/jksjufbtm.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o31ue_bnk wm-k"/><path class="wm-shine xo92ezbpx"/><path class="p9ft05bsh wm-shine"/><path class="jksjufbtm wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:file-spreadsheet"} {...others} />);
}

export default Component;
