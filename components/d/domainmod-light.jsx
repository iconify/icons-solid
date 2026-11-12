import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loycbjbia.css';
import '../../css/w/w3qyplb8m.css';
import '../../css/i/ihoo6dbgx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="loycbjbia"/><path class="w3qyplb8m"/><path class="ihoo6dbgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domainmod-light"} {...others} />);
}

export default Component;
