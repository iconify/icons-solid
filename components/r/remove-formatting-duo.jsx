import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kohggmbfj.css';
import '../../css/w/wwn5kybby.css';
import '../../css/b/bd8q_6bmk.css';
import '../../css/j/jj_5azneh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kohggmbfj"/><path class="wwn5kybby"/><path class="bd8q_6bmk"/><path class="jj_5azneh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:remove-formatting-duo"} {...others} />);
}

export default Component;
