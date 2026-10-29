import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rsj615bhh.css';
import '../../css/d/dj3-zub5c.css';
import '../../css/t/t41bz1bmx.css';
import '../../css/i/iowujdkjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rsj615bhh wm-k"/><path class="dj3-zub5c wm-k"/><path class="t41bz1bmx wm-k"/><path class="iowujdkjh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bold"} {...others} />);
}

export default Component;
