import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sp4r-xb2h.css';
import '../../css/z/zfczofb_k.css';
import '../../css/x/xxqnz9_tr.css';
import '../../css/q/qb5jn3b2s.css';
import '../../css/b/bzynzkb9r.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="sp4r-xb2h"/><path class="zfczofb_k"/><path class="xxqnz9_tr"/><path class="qb5jn3b2s"/><path class="bzynzkb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:refresh"} {...others} />);
}

export default Component;
