import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ify3__5xp.css';
import '../../css/k/kqdww1lkr.css';
import '../../css/d/d5kv-1gyk.css';
import '../../css/w/wjjs-ibru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ify3__5xp"/><path class="kqdww1lkr wm-a"/><path class="d5kv-1gyk"/><path class="wjjs-ibru wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:balloon-duo"} {...others} />);
}

export default Component;
