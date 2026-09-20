import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/u/umomfebca.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/e/e19dmhn4k.css';
import '../../css/r/rkx58-t5u.css';
import '../../css/o/owomm5jgl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="juu6lxbqs"/><path class="umomfebca"/><path class="s_f6m4b-b"/><path class="e19dmhn4k"/><path class="rkx58-t5u"/><path class="owomm5jgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:worried-face"} {...others} />);
}

export default Component;
