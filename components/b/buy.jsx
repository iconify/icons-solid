import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/ubewop_6h.css';
import '../../css/q/qd654zb1j.css';
import '../../css/s/sc95x2bmc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="ubewop_6h"/><path class="qd654zb1j"/><path class="sc95x2bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:buy"} {...others} />);
}

export default Component;
