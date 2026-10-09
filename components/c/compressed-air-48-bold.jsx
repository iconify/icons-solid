import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrpnbqbmf.css';
import '../../css/h/h0iwgbcsg.css';
import '../../css/a/abj66lb3u.css';
import '../../css/j/jsaqtf_sl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vrpnbqbmf"/><path class="h0iwgbcsg"/><path class="abj66lb3u"/><path class="jsaqtf_sl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compressed-air-48-bold"} {...others} />);
}

export default Component;
