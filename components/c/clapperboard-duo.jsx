import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xt2kaob-a.css';
import '../../css/l/lf_6xcc0h.css';
import '../../css/i/i3gm_p-3h.css';
import '../../css/d/d6t_ucbpo.css';
import '../../css/p/pod2lxhzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xt2kaob-a"/><path class="lf_6xcc0h wm-a"/><path class="i3gm_p-3h wm-a"/><path class="d6t_ucbpo"/><path class="pod2lxhzh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clapperboard-duo"} {...others} />);
}

export default Component;
