import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm0xpbe5i.css';
import '../../css/s/sla_3qh9n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hm0xpbe5i"/><path class="sla_3qh9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fandom"} {...others} />);
}

export default Component;
