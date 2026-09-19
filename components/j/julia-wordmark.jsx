import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iymgc2ond.css';
import '../../css/d/dsl-pbbjl.css';
import '../../css/f/f_lca56ke.css';
import '../../css/x/x17n5ebls.css';
import '../../css/r/rvugqobje.css';
import '../../css/s/s-d11ww5b.css';
import '../../css/r/rt6ew-68q.css';
import '../../css/c/cbdvo0b2x.css';
import '../../css/o/ojblrlbxc.css';
import '../../css/v/vo8qkxpmc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="iymgc2ond"/><path class="dsl-pbbjl"/><path class="f_lca56ke"/><path class="x17n5ebls"/><path class="rvugqobje"/><path class="s-d11ww5b"/><path class="rt6ew-68q"/><path class="cbdvo0b2x"/><path class="ojblrlbxc"/><path class="vo8qkxpmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:julia-wordmark"} {...others} />);
}

export default Component;
