import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g-ujbh_es.css';
import '../../css/n/n5j6wubbb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="g-ujbh_es"/><path class="n5j6wubbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:multi-picture-carousel"} {...others} />);
}

export default Component;
