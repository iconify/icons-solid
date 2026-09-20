import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d9qro1utq.css';
import '../../css/h/hzv490b_j.css';
import '../../css/z/zp64-ob9i.css';
import '../../css/i/i3s0k7bbn.css';
import '../../css/p/poj_jpbln.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d9qro1utq"/><path class="hzv490b_j"/><path class="zp64-ob9i"/><path class="i3s0k7bbn"/><path class="poj_jpbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hot-air-balloon"} {...others} />);
}

export default Component;
