import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bg65hobfr.css';
import '../../css/d/dq_8uac5l.css';
import '../../css/h/h77qjobjk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="bg65hobfr"/><circle class="dq_8uac5l"/><path class="h77qjobjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:transform"} {...others} />);
}

export default Component;
