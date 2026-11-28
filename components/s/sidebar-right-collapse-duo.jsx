import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0eyqfbsg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q5ttimbfx.css';
import '../../css/h/hpm3n00kb.css';
import '../../css/u/uxmobwbzs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary t0eyqfbsg"/><g class="dt0cm9dhy primary"><path class="q5ttimbfx"/><path class="hpm3n00kb"/><path class="uxmobwbzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sidebar-right-collapse-duo"} {...others} />);
}

export default Component;
