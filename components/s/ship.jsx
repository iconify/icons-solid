import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nee-ygs9z.css';
import '../../css/q/q142uzbwd.css';
import '../../css/q/q5055ebxc.css';
import '../../css/t/tm65h-b9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nee-ygs9z wm-k"/><path class="q142uzbwd wm-k"/><path class="q5055ebxc wm-k"/><path class="tm65h-b9m wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:ship"} {...others} />);
}

export default Component;
