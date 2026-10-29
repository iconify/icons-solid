import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/st-oxhb_e.css';
import '../../css/t/tisd5ib6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="st-oxhb_e"/><path class="tisd5ib6g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volume-1"} {...others} />);
}

export default Component;
