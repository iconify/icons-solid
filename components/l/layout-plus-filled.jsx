import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhbvqjyxk.css';
import '../../css/j/j64dr1bxs.css';
import '../../css/q/qpf972b3q.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="bhbvqjyxk"/><rect class="j64dr1bxs"/><path class="qpf972b3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:layout-plus-filled"} {...others} />);
}

export default Component;
