import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7wx7kbhp.css';
import '../../css/d/df7nqu-tw.css';
import '../../css/x/xuj0q8iic.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/r9yi4tzrn.css';
import '../../css/k/kchiyjp3t.css';
import '../../css/w/whlta5bix.css';
import '../../css/x/xbm3u3vvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u7wx7kbhp"/><path clip-rule="evenodd" class="df7nqu-tw"/><path class="xuj0q8iic"/><g class="xtpeb-edw"><path class="r9yi4tzrn"/><path class="kchiyjp3t"/><path class="whlta5bix"/><path class="xbm3u3vvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-round-bold-duotone"} {...others} />);
}

export default Component;
