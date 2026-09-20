import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/l/l7zo73bln.css';
import '../../css/i/i13_w-boc.css';
import '../../css/u/ulke_x52y.css';
import '../../css/a/a4mbgc_8g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="yph-txb3i"/><path class="l7zo73bln"/><circle class="i13_w-boc"/><path class="ulke_x52y"/><circle class="a4mbgc_8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-slider-horizontal-square-adjust-controls-fader-horizontal-settings-slider-square"} {...others} />);
}

export default Component;
