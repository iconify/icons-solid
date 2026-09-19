import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qz9_4ab0u.css';
import '../../css/x/x8ll_eb0k.css';
import '../../css/f/fag8nwoln.css';
import '../../css/u/uov2v7y7s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="qz9_4ab0u"/><path class="x8ll_eb0k"/><path class="fag8nwoln"/><path class="uov2v7y7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chinese-pavilion"} {...others} />);
}

export default Component;
