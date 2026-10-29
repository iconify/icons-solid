import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1x_8_bpr.css';
import '../../css/l/llr2t6bvp.css';
import '../../css/q/q0nxqpuje.css';
import '../../css/u/u8cr0k3du.css';
import '../../css/c/cx-ghxqxn.css';
import '../../css/m/m_d1-zbow.css';
import '../../css/b/bknil0tdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o1x_8_bpr wm-k"/><path class="llr2t6bvp wm-k"/><path class="q0nxqpuje wm-k"/><path class="u8cr0k3du wm-a"/><path class="cx-ghxqxn wm-a"/><path class="m_d1-zbow wm-a"/><path class="bknil0tdp wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:file"} {...others} />);
}

export default Component;
