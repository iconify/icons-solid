import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yr0k3sbts.css';
import '../../css/x/xni4fzb_z.css';
import '../../css/i/i4jft8vho.css';
import '../../css/r/rthofi-re.css';
import '../../css/w/wcy88z0dy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yr0k3sbts"/><path class="xni4fzb_z"/><path class="i4jft8vho"/><path class="rthofi-re"/><path class="wcy88z0dy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sleigh"} {...others} />);
}

export default Component;
