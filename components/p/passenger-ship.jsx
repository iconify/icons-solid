import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_qe8zbkt.css';
import '../../css/e/ed6mz5g0d.css';
import '../../css/l/l_sjpbb3z.css';
import '../../css/x/xxaoylg9f.css';
import '../../css/s/stokidsbr.css';
import '../../css/n/nwe-udbek.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o3u2pb6eq.css';
import '../../css/j/jafat5bmv.css';
import '../../css/r/r8rf-rb8n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c_qe8zbkt"/><path class="ed6mz5g0d"/><path class="l_sjpbb3z"/><path class="xxaoylg9f"/><path class="stokidsbr"/><path class="nwe-udbek"/><g class="jn8qy4bru"><path class="o3u2pb6eq"/><path class="jafat5bmv"/><path class="r8rf-rb8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:passenger-ship"} {...others} />);
}

export default Component;
