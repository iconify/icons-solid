import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ui6i2ub_e.css';
import '../../css/l/ljd73q_em.css';
import '../../css/z/zs0yt-54m.css';
import '../../css/b/b0ff2950w.css';
import '../../css/y/y77jx5bfn.css';
import '../../css/v/v32yj6byq.css';
import '../../css/z/z6mlpibgy.css';
import '../../css/w/wysipeben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ui6i2ub_e wm-k"/><path class="ljd73q_em wm-k"/><path class="wm-k zs0yt-54m"/><path class="b0ff2950w wm-shine"/><path class="wm-k y77jx5bfn"/><path class="v32yj6byq wm-k"/><path class="wm-k z6mlpibgy"/><path class="wm-shine wysipeben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:pause"} {...others} />);
}

export default Component;
