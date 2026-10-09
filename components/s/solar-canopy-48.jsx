import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8r_qsbws.css';
import '../../css/r/ry01m7_4o.css';
import '../../css/b/bbwelfbky.css';
import '../../css/w/w4lj5sbru.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q8r_qsbws"/><path class="ry01m7_4o"/><path class="bbwelfbky"/><path class="w4lj5sbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-canopy-48"} {...others} />);
}

export default Component;
