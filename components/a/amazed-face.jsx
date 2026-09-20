import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/o/owomm5jgl.css';
import '../../css/d/d4hbusqrf.css';
import '../../css/f/fbne5_yox.css';
import '../../css/q/q1n16vr5s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="s_f6m4b-b"/><path class="juu6lxbqs"/><path class="owomm5jgl"/><path class="d4hbusqrf"/><path class="fbne5_yox"/><path class="q1n16vr5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:amazed-face"} {...others} />);
}

export default Component;
