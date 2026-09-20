import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og5k9ackk.css';
import '../../css/x/x2q17r7hj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="og5k9ackk"/><path class="x2q17r7hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:simplex-chat"} {...others} />);
}

export default Component;
