import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikfqmnb8s.css';
import '../../css/j/jo6q_wbuz.css';
import '../../css/j/j7547va7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ikfqmnb8s"/><path class="jo6q_wbuz"/><path class="j7547va7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-15-seconds-back-bold"} {...others} />);
}

export default Component;
