import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h20gs_bcq.css';
import '../../css/n/n-wi292rt.css';
import '../../css/m/me_kv8bpm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="h20gs_bcq"/><path class="n-wi292rt"/><path class="me_kv8bpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:camera-setting-gear"} {...others} />);
}

export default Component;
