import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh82fib1q.css';
import '../../css/j/jvt0l2akk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jh82fib1q"/><path clip-rule="evenodd" class="jvt0l2akk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:videocamera-off-outline"} {...others} />);
}

export default Component;
