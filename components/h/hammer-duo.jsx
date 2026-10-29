import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x718k_mcw.css';
import '../../css/l/l4w1fn-uy.css';
import '../../css/b/bwni0_j2d.css';
import '../../css/d/d1up9g-eu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x718k_mcw"/><path class="l4w1fn-uy wm-a"/><path class="bwni0_j2d"/><path class="d1up9g-eu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hammer-duo"} {...others} />);
}

export default Component;
