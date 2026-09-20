import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/v/v4dqczbhw.css';
import '../../css/s/sl77u0bky.css';
import '../../css/h/he-12h1yf.css';
import '../../css/t/tqjg73beh.css';
import '../../css/h/hkx4dtb_t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="s_f6m4b-b"/><path class="juu6lxbqs"/><path class="v4dqczbhw"/><path class="sl77u0bky"/><path class="he-12h1yf"/><path class="tqjg73beh"/><path class="hkx4dtb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:anxious-face"} {...others} />);
}

export default Component;
