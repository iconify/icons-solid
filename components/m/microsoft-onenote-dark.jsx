import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc4rf65pq.css';
import '../../css/d/diki2ffvo.css';
import '../../css/j/ji-kiybzk.css';
import '../../css/y/yaqxqdbps.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kc4rf65pq"/><path class="diki2ffvo"/><path class="ji-kiybzk"/><path class="yaqxqdbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onenote-dark"} {...others} />);
}

export default Component;
