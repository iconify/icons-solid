import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/srxox7kbi.css';
import '../../css/o/oar_8075t.css';
import '../../css/q/qh9s-mbad.css';
import '../../css/r/rd4v8e0dx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="srxox7kbi"/><path class="oar_8075t"/><path class="qh9s-mbad"/><path class="rd4v8e0dx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:error-prompt"} {...others} />);
}

export default Component;
