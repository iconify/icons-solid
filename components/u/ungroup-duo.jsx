import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kuxygd_gr.css';
import '../../css/n/n35k4vbev.css';
import '../../css/p/pfgi2nbvf.css';
import '../../css/w/wrc723bxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kuxygd_gr"/><path class="n35k4vbev wm-a"/><path class="pfgi2nbvf"/><path class="wm-a wrc723bxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ungroup-duo"} {...others} />);
}

export default Component;
