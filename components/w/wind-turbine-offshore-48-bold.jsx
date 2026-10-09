import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iarxbnbft.css';
import '../../css/j/j5yt-usot.css';
import '../../css/u/uhxar85hb.css';
import '../../css/i/iqzxp16gl.css';
import '../../css/h/hqm7cs9hy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iarxbnbft"/><path class="j5yt-usot"/><path class="uhxar85hb"/><path class="iqzxp16gl"/><path class="hqm7cs9hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-offshore-48-bold"} {...others} />);
}

export default Component;
