import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s-hu2mbef.css';
import '../../css/v/vilhzscue.css';
import '../../css/p/pcromnbas.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/z/zpu53zwhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="s-hu2mbef"/><path class="vilhzscue"/><path class="pcromnbas wm-shine"/><path class="l9lv5_bcf wm-k"/><path class="wm-a zpu53zwhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:scan-face"} {...others} />);
}

export default Component;
