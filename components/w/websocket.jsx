import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3w3uox9w.css';
import '../../css/j/j4n3fkkjr.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="s3w3uox9w"/><path class="j4n3fkkjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:websocket"} {...others} />);
}

export default Component;
