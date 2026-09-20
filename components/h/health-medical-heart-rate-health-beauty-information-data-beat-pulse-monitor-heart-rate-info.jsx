import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oj1ph4bdw.css';
import '../../css/m/m7wji7myk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="oj1ph4bdw"/><path class="m7wji7myk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:health-medical-heart-rate-health-beauty-information-data-beat-pulse-monitor-heart-rate-info"} {...others} />);
}

export default Component;
