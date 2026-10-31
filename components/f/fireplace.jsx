import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8gezv97u.css';
import '../../css/x/x3cbt25_s.css';
import '../../css/i/irszdrruk.css';
import '../../css/l/l2jpnxw8r.css';
import '../../css/h/h9hwb0bkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f8gezv97u wm-k"/><path class="wm-deco x3cbt25_s"/><path class="irszdrruk wm-k"/><path class="l2jpnxw8r wm-shadow"/><path class="h9hwb0bkv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:fireplace"} {...others} />);
}

export default Component;
