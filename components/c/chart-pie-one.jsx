import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pygxscc_e.css';
import '../../css/j/jkqxc6rbv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pygxscc_e"/><path class="jkqxc6rbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chart-pie-one"} {...others} />);
}

export default Component;
