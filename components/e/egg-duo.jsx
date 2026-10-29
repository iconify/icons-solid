import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eghilk5zd.css';
import '../../css/t/t_iyb2b1h.css';
import '../../css/p/pez66rbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="eghilk5zd"/><path class="t_iyb2b1h wm-a"/><path class="pez66rbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:egg-duo"} {...others} />);
}

export default Component;
