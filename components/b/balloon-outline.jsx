import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9rq_swmq.css';
import '../../css/b/bhcwjtbdh.css';
import '../../css/y/y-ulyzb5u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q9rq_swmq"/><path class="bhcwjtbdh"/><path class="y-ulyzb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:balloon-outline"} {...others} />);
}

export default Component;
