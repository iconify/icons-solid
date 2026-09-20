import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/e/e19dmhn4k.css';
import '../../css/o/owomm5jgl.css';
import '../../css/o/obeujhbtt.css';
import '../../css/m/m7vrd8dwl.css';
import '../../css/a/aojwyybmr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="juu6lxbqs"/><path class="ocif-h9bu"/><path class="s_f6m4b-b"/><path class="e19dmhn4k"/><path class="owomm5jgl"/><path class="obeujhbtt"/><path class="m7vrd8dwl"/><path class="aojwyybmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:zipper-mouth-face"} {...others} />);
}

export default Component;
