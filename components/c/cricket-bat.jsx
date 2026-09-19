import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wjzajobpc.css';
import '../../css/w/whu8gg7-e.css';
import '../../css/n/nd3hq4prs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wjzajobpc"/><path class="whu8gg7-e"/><circle transform="matrix(-1 0 0 1 21 16)" class="nd3hq4prs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cricket-bat"} {...others} />);
}

export default Component;
