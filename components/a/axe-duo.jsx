import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kpg7scfkl.css';
import '../../css/h/hv1_qk9jj.css';
import '../../css/m/mjecvc15l.css';
import '../../css/g/gfqmenbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kpg7scfkl"/><path class="hv1_qk9jj wm-a"/><path class="mjecvc15l"/><path class="gfqmenbgk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:axe-duo"} {...others} />);
}

export default Component;
