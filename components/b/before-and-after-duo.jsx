import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x670tjb1e.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rmv9bobon.css';
import '../../css/d/dab5zv50c.css';
import '../../css/u/up2_48b4c.css';
import '../../css/f/fy27n3vtu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary x670tjb1e"/><g class="dt0cm9dhy primary"><path class="rmv9bobon"/><path class="dab5zv50c"/><path class="up2_48b4c"/><path class="fy27n3vtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:before-and-after-duo"} {...others} />);
}

export default Component;
