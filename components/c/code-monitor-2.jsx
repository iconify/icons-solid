import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/g/gqfwuab_m.css';
import '../../css/o/oz3au1e5x.css';
import '../../css/p/pprr0rbxr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="gqfwuab_m"/><path class="oz3au1e5x"/><path class="pprr0rbxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:code-monitor-2"} {...others} />);
}

export default Component;
