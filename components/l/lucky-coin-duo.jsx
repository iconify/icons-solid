import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hwj-ajb-x.css';
import '../../css/q/q4fjqwbqj.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/c/c-a4_nb-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hwj-ajb-x"/><path class="q4fjqwbqj wm-a"/><path class="yw4fz_b6b"/><path class="c-a4_nb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lucky-coin-duo"} {...others} />);
}

export default Component;
