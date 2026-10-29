import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r3304u6nq.css';
import '../../css/a/avj_yerhl.css';
import '../../css/l/l8wgslcir.css';
import '../../css/z/zc446puvu.css';
import '../../css/v/vmaag2bhb.css';
import '../../css/h/hp6gmtywg.css';
import '../../css/c/covhyu45u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r3304u6nq wm-shadow"/><path class="avj_yerhl wm-k"/><path class="l8wgslcir wm-k"/><path class="wm-k zc446puvu"/><path class="vmaag2bhb wm-k"/><path class="hp6gmtywg wm-k"/><path class="covhyu45u wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:parentheses"} {...others} />);
}

export default Component;
