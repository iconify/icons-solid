import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr1_hbciw.css';
import '../../css/q/qy4kkrx_j.css';
import '../../css/j/j39ryybzs.css';
import '../../css/z/zdg0a9bil.css';
import '../../css/b/bgfsy235j.css';
import '../../css/i/i8svn3shk.css';
import '../../css/u/up4ucvbpl.css';
import '../../css/r/ro65v03qe.css';
import '../../css/o/oiuczgb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow yr1_hbciw"/><path class="qy4kkrx_j wm-a"/><path class="j39ryybzs wm-a"/><path class="wm-k zdg0a9bil"/><path class="bgfsy235j wm-k"/><path class="i8svn3shk wm-k"/><path class="up4ucvbpl wm-k"/><path class="ro65v03qe wm-k"/><path class="oiuczgb2n wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:route"} {...others} />);
}

export default Component;
