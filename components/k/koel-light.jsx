import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndndjv9pq.css';
import '../../css/q/qmqaxfynj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ndndjv9pq"/><path class="qmqaxfynj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:koel-light"} {...others} />);
}

export default Component;
