import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqs373j8m.css';
import '../../css/l/l_lpikbgk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sqs373j8m"/><path class="l_lpikbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pocketbase"} {...others} />);
}

export default Component;
