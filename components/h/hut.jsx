import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3i0g_bhl.css';
import '../../css/e/extwn3bgp.css';
import '../../css/x/xrmx3xz4e.css';
import '../../css/d/d5f39acby.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n3qah61rv.css';
import '../../css/y/y28k0uf7f.css';
import '../../css/w/wq0oc2c1k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="w3i0g_bhl"/><path class="extwn3bgp"/><path class="xrmx3xz4e"/><path class="d5f39acby"/><g class="jn8qy4bru"><path class="n3qah61rv"/><path class="y28k0uf7f"/><path class="wq0oc2c1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hut"} {...others} />);
}

export default Component;
