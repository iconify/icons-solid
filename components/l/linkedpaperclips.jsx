import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmo3fgbyk.css';
import '../../css/y/yzi7645on.css';
import '../../css/b/b0actyg2j.css';
import '../../css/m/m15jr1ble.css';
import '../../css/f/fldvjacjt.css';
import '../../css/w/wz6ab6xkk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hmo3fgbyk"/><path class="yzi7645on"/><path class="b0actyg2j"/><path class="m15jr1ble"/><path class="fldvjacjt"/><path class="wz6ab6xkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:linkedpaperclips"} {...others} />);
}

export default Component;
