import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v3zt_xb4i.css';
import '../../css/q/q-3l8kb_v.css';
import '../../css/c/c5t42okpd.css';
import '../../css/g/g2-s0mbvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="v3zt_xb4i"/><path class="q-3l8kb_v"/><path class="c5t42okpd"/><path class="g2-s0mbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:monitor-cog"} {...others} />);
}

export default Component;
