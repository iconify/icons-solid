import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3bhubjjm.css';
import '../../css/k/ktli5dbnn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v3bhubjjm"/><path class="ktli5dbnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:strapi-dark"} {...others} />);
}

export default Component;
