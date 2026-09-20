import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq10kcy8p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mq10kcy8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:facebook-dark"} {...others} />);
}

export default Component;
