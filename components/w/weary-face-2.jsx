import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/a/a3pmd3ssc.css';
import '../../css/k/kjuda_b1e.css';
import '../../css/o/ooiisgb-l.css';
import '../../css/h/hkx4dtb_t.css';
import '../../css/o/owomm5jgl.css';
import '../../css/d/dbh9tstmw.css';
import '../../css/f/fcjfu5bvx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="juu6lxbqs"/><path class="s_f6m4b-b"/><path class="a3pmd3ssc"/><path class="kjuda_b1e"/><path class="ooiisgb-l"/><path class="hkx4dtb_t"/><path class="owomm5jgl"/><path class="dbh9tstmw"/><path class="fcjfu5bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:weary-face-2"} {...others} />);
}

export default Component;
