import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ep-inmlxl.css';
import '../../css/q/qto-zm4sj.css';
import '../../css/c/c15actb7e.css';
import '../../css/s/s_slv4b-c.css';
import '../../css/o/o5grrub_r.css';
import '../../css/k/k1yq3bchj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="ep-inmlxl"/><path class="qto-zm4sj"/><circle class="c15actb7e"/><path class="s_slv4b-c"/><circle class="o5grrub_r"/><path class="k1yq3bchj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-slider-vertical-adjustment-adjust-controls-fader-vertical-settings-slider"} {...others} />);
}

export default Component;
