import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fgp59ub9g.css';
import '../../css/d/dgivy6yyz.css';
import '../../css/v/vrm34f8gd.css';
import '../../css/o/ows2wwb4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fgp59ub9g"/><path class="dgivy6yyz wm-a"/><path class="vrm34f8gd"/><path class="ows2wwb4n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cherry-duo"} {...others} />);
}

export default Component;
