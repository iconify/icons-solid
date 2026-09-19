import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x7n67kbaj.css';
import '../../css/h/hq7te623q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="x7n67kbaj"/><path class="hq7te623q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:piano"} {...others} />);
}

export default Component;
