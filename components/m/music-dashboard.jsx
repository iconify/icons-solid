import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f3u0_18rl.css';
import '../../css/w/wblmcub7l.css';
import '../../css/w/wr_ombbyr.css';
import '../../css/j/jqsf6xrbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f3u0_18rl"/><path class="wblmcub7l"/><path class="wr_ombbyr"/><path class="jqsf6xrbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-dashboard"} {...others} />);
}

export default Component;
