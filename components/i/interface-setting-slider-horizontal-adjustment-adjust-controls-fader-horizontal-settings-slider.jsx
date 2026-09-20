import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fgw8jg94a.css';
import '../../css/h/h0njrttoz.css';
import '../../css/o/o5grrub_r.css';
import '../../css/v/v3tt3fb5u.css';
import '../../css/d/dcgw77bis.css';
import '../../css/y/ym1b48f-r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="fgw8jg94a"/><path class="h0njrttoz"/><circle class="o5grrub_r"/><path class="v3tt3fb5u"/><circle class="dcgw77bis"/><path class="ym1b48f-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-slider-horizontal-adjustment-adjust-controls-fader-horizontal-settings-slider"} {...others} />);
}

export default Component;
