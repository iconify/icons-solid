import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axdgn75ci.css';
import '../../css/m/mgv7ffjnx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="axdgn75ci"/><path class="mgv7ffjnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openhands"} {...others} />);
}

export default Component;
