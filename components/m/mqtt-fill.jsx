import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy42bub1l.css';
import '../../css/b/bm6480m4f.css';
import '../../css/j/j5tfbcb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fy42bub1l"/><path class="bm6480m4f"/><path class="j5tfbcb4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:mqtt-fill"} {...others} />);
}

export default Component;
