import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_dovporp.css';
import '../../css/r/rc7tgcbfi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d_dovporp"/><path class="rc7tgcbfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:airpipe"} {...others} />);
}

export default Component;
