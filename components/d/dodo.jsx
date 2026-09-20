import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgjy9r09n.css';
import '../../css/i/i6jqbtb4r.css';
import '../../css/j/j-ih9d92t.css';
import '../../css/x/x7a3q1b3l.css';
import '../../css/s/shoeovb9g.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/iqsqkbbcc.css';
import '../../css/x/xtyenbcqc.css';
import '../../css/a/an2ftrb5p.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jgjy9r09n"/><path class="i6jqbtb4r"/><path class="j-ih9d92t"/><path class="x7a3q1b3l"/><path class="shoeovb9g"/><g class="jn8qy4bru"><path class="iqsqkbbcc"/><path class="xtyenbcqc"/><path class="an2ftrb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dodo"} {...others} />);
}

export default Component;
