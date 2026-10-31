import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i6ubozb6t.css';
import '../../css/w/wd5exjbsn.css';
import '../../css/t/tqgx9mb7g.css';
import '../../css/a/a67wqccgh.css';
import '../../css/g/g_v-_ab6w.css';
import '../../css/l/lemzcpbln.css';
import '../../css/q/qdcvigvev.css';
import '../../css/g/gkz3jr68s.css';
import '../../css/b/b89yp_bqn.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i6ubozb6t"/><path class="wd5exjbsn"/><path class="tqgx9mb7g"/><path class="a67wqccgh"/><path class="g_v-_ab6w"/><path class="lemzcpbln"/><path class="qdcvigvev"/><path class="gkz3jr68s"/><path class="b89yp_bqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:all-the-things-meme-hand-drawn"} {...others} />);
}

export default Component;
