import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akr41tcoa.css';
import '../../css/i/ihrvc4brd.css';
import '../../css/b/b0_pq7qdh.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/ea1zdkbuj.css';
import '../../css/z/zhzvc4b-t.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="akr41tcoa"/><path class="ihrvc4brd"/><rect class="b0_pq7qdh"/><g class="jn8qy4bru"><path class="ea1zdkbuj"/><rect class="zhzvc4b-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:name-badge"} {...others} />);
}

export default Component;
