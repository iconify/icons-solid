import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sp90bz0_h.css';
import '../../css/h/hv_jolb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="sp90bz0_h"/><path class="hv_jolb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-big-up-duo"} {...others} />);
}

export default Component;
