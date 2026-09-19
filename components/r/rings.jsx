import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3dpzbtra.css';
import '../../css/c/cf7ta6bqc.css';
import '../../css/p/pbc9w196e.css';
import '../../css/h/hs1eo5b-l.css';
import '../../css/b/bqv7lzboi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y3dpzbtra"><path class="cf7ta6bqc"/><path class="pbc9w196e"/><path class="hs1eo5b-l"/><path class="bqv7lzboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rings"} {...others} />);
}

export default Component;
