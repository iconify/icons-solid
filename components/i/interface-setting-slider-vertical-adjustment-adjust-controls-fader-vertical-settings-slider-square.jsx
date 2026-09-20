import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/k/ko79dj56t.css';
import '../../css/m/mko8dh4hu.css';
import '../../css/s/s36q3pbgs.css';
import '../../css/v/vvmfiub1b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect transform="rotate(-90 7 7)" class="yph-txb3i"/><path class="ko79dj56t"/><circle class="mko8dh4hu"/><path class="s36q3pbgs"/><circle class="vvmfiub1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-slider-vertical-adjustment-adjust-controls-fader-vertical-settings-slider-square"} {...others} />);
}

export default Component;
