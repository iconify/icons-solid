import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-b290bmq.css';
import '../../css/n/nb1xhjn8e.css';
import '../../css/w/w__q6qexy.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/i/i1hktmb2t.css';
import '../../css/u/u4s3v7b_n.css';
import '../../css/w/wyjayoz6j.css';
import '../../css/x/x7id0nbbq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q-b290bmq"/><path class="nb1xhjn8e"/><path class="w__q6qexy"/><g class="brzn_0bpr"><ellipse transform="rotate(-10.248 30.32 22.573)" class="i1hktmb2t"/><path class="u4s3v7b_n"/><path class="wyjayoz6j"/><path class="x7id0nbbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:koala"} {...others} />);
}

export default Component;
