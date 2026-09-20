import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/o/owomm5jgl.css';
import '../../css/x/xvqf_ebja.css';
import '../../css/p/p4zd_6you.css';
import '../../css/n/nvhrn8bbl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="s_f6m4b-b"/><path class="juu6lxbqs"/><path class="owomm5jgl"/><path class="xvqf_ebja"/><path class="p4zd_6you"/><path class="nvhrn8bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:grinning-face-with-smiling-eyes"} {...others} />);
}

export default Component;
