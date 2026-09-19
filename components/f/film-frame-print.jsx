import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kfsfyn02l.css';
import '../../css/q/qbmterf1u.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="kfsfyn02l"/><path clip-rule="evenodd" class="qbmterf1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:film-frame-print"} {...others} />);
}

export default Component;
