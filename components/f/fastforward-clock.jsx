import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tom066bwp.css';
import '../../css/g/g5r41j-rs.css';
import '../../css/t/ti-xclg9r.css';
import '../../css/s/sex64uljz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="tom066bwp"><path class="g5r41j-rs"/><path class="ti-xclg9r"/><path class="sex64uljz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:fastforward-clock"} {...others} />);
}

export default Component;
