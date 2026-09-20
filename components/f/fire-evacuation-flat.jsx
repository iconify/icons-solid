import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zpjy4_zoi.css';
import '../../css/l/lcegxhb1j.css';
import '../../css/f/fc6nuz8hc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zpjy4_zoi"/><path clip-rule="evenodd" class="lcegxhb1j"/><path class="fc6nuz8hc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fire-evacuation-flat"} {...others} />);
}

export default Component;
