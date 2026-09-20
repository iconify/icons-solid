import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zeah75bkv.css';
import '../../css/g/glfd2jhtx.css';
import '../../css/g/g_jtrib-q.css';
import '../../css/e/egt8mmbbe.css';
import '../../css/f/fspao8b6m.css';
import '../../css/q/q0nfv90qk.css';
import '../../css/m/ml2nd7bgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zeah75bkv"/><path class="glfd2jhtx"/><path class="g_jtrib-q"/><path class="egt8mmbbe"/><path class="fspao8b6m"/><path class="q0nfv90qk"/><path class="ml2nd7bgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:picture-double-landscape"} {...others} />);
}

export default Component;
