import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvd6fwb9u.css';
import '../../css/m/mrks0fbpf.css';
import '../../css/x/xny0yb37h.css';
import '../../css/q/q_3m2_tjw.css';
import '../../css/k/ki3ajwb_h.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zhhf51b5r.css';
import '../../css/p/pzreqqboe.css';
import '../../css/l/l0m3fmbfp.css';
import '../../css/n/n8gu1ebhy.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dvd6fwb9u"><path class="mrks0fbpf"/><path class="xny0yb37h"/><circle class="q_3m2_tjw"/><path class="ki3ajwb_h"/></g><g class="jn8qy4bru"><circle class="zhhf51b5r"/><path class="pzreqqboe"/><path class="l0m3fmbfp"/><path class="n8gu1ebhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wheelchair-symbol"} {...others} />);
}

export default Component;
