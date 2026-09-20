import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqo7mbvlt.css';
import '../../css/s/syv4ombst.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vqo7mbvlt"/><path class="syv4ombst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:libera-chat"} {...others} />);
}

export default Component;
