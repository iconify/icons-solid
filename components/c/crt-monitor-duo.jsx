import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm1z8ubgi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cinid7bvt.css';
import '../../css/q/qd8xfzbvu.css';
import '../../css/c/cacmyj2hp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sm1z8ubgi"/><g class="dt0cm9dhy primary"><path class="cinid7bvt"/><path class="qd8xfzbvu"/><path class="cacmyj2hp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:crt-monitor-duo"} {...others} />);
}

export default Component;
