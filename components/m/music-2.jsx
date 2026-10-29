import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hu0jzyber.css';
import '../../css/j/j1-7kwb-f.css';
import '../../css/z/z49_jnbhz.css';
import '../../css/v/vrmoi5b2z.css';
import '../../css/v/vcw87xbdc.css';
import '../../css/f/fmavvbcih.css';
import '../../css/b/bqrh2ybmy.css';
import '../../css/o/o25a989nd.css';
import '../../css/j/jd6n1xhsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hu0jzyber wm-shadow"/><path class="j1-7kwb-f wm-shadow"/><path class="z49_jnbhz"/><path class="vrmoi5b2z"/><path class="vcw87xbdc"/><path class="fmavvbcih"/><path class="bqrh2ybmy wm-shine"/><path class="o25a989nd wm-shine"/><path class="jd6n1xhsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:music-2"} {...others} />);
}

export default Component;
