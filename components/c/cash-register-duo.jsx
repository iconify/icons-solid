import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xxnnixb_j.css';
import '../../css/s/s-b9mp_do.css';
import '../../css/g/ghy1agb1b.css';
import '../../css/q/qlkgjzbfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wm-a xxnnixb_j"/><path class="s-b9mp_do"/><path class="ghy1agb1b wm-a"/><path class="qlkgjzbfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cash-register-duo"} {...others} />);
}

export default Component;
