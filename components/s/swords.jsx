import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s8tbnvbfr.css';
import '../../css/y/yw65l1n9b.css';
import '../../css/i/ik6bwxiui.css';
import '../../css/t/tg06e8gex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="s8tbnvbfr wm-shadow"/><path class="yw65l1n9b"/><path class="ik6bwxiui"/><path class="tg06e8gex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:swords"} {...others} />);
}

export default Component;
