import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mv3x0f2uq.css';
import '../../css/s/s7t5xsblx.css';
import '../../css/t/t_bb9sb1d.css';
import '../../css/j/jrct5_xpi.css';
import '../../css/q/q28h-vbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mv3x0f2uq"/><path class="s7t5xsblx"/><path class="t_bb9sb1d"/><path class="jrct5_xpi"/><path class="q28h-vbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:git-branch-check"} {...others} />);
}

export default Component;
