import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5hxmlb6i.css';
import '../../css/r/rxnjfbb7d.css';
import '../../css/v/vpvq3sbqz.css';
import '../../css/d/d8_c82bqs.css';
import '../../css/w/wfx4qzbqx.css';
import '../../css/f/f4ik1bcyz.css';
import '../../css/l/lvcmsczgo.css';
import '../../css/f/f-o5qk7dg.css';
import '../../css/e/egqyuebhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h5hxmlb6i wm-k"/><path class="rxnjfbb7d wm-k"/><path class="vpvq3sbqz wm-k"/><path class="d8_c82bqs wm-shine"/><path class="wfx4qzbqx wm-k"/><path class="f4ik1bcyz wm-k"/><path class="lvcmsczgo wm-a"/><path class="f-o5qk7dg wm-a"/><path class="egqyuebhj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:package"} {...others} />);
}

export default Component;
