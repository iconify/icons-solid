import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxv5-ybvj.css';
import '../../css/d/dy2pj252l.css';
import '../../css/u/uc3_jjxqq.css';
import '../../css/u/u_ontkbwd.css';
import '../../css/y/yxiytebqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kxv5-ybvj wm-k"/><path class="dy2pj252l wm-k"/><path class="uc3_jjxqq wm-k"/><path class="u_ontkbwd wm-shine"/><path class="wm-k yxiytebqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:jalebi"} {...others} />);
}

export default Component;
