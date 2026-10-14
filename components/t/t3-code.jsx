import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqtotg3-l.css';
import '../../css/p/p_zu6bc8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vqtotg3-l"/><path class="p_zu6bc8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:t3-code"} {...others} />);
}

export default Component;
