import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cnp_qvbeb.css';
import '../../css/f/f1lvhpx7o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="cnp_qvbeb"/><path class="f1lvhpx7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-lightning-2-cloud-bolt-storm-weather-thunder-meteorology-lightning"} {...others} />);
}

export default Component;
