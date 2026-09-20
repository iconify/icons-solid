import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dzc8x6q6k.css';
import '../../css/w/w0a9k0m0u.css';
import '../../css/t/tghqjfbhf.css';
import '../../css/o/o4kgwxbri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dzc8x6q6k"/><path class="w0a9k0m0u"/><path class="tghqjfbhf"/><path class="o4kgwxbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:user-signal-1"} {...others} />);
}

export default Component;
