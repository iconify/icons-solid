import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5wzb1xmq.css';
import '../../css/q/q3gqlvbsr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q5wzb1xmq"/><path class="q3gqlvbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mergeable"} {...others} />);
}

export default Component;
