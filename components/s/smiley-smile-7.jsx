import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7hm2xayt.css';
import '../../css/p/pzpc1pbrw.css';
import '../../css/t/tbplp_bze.css';
import '../../css/v/v-fvlgfui.css';
import '../../css/y/yh1kbryel.css';
import '../../css/m/mzr8vkh0x.css';
import '../../css/b/bz-sf9bxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a7hm2xayt"/><path class="pzpc1pbrw"/><path class="tbplp_bze"/><path class="v-fvlgfui"/><path class="yh1kbryel"/><path class="mzr8vkh0x"/><path class="bz-sf9bxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:smiley-smile-7"} {...others} />);
}

export default Component;
