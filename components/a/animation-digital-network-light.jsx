import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wiyct_b9q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wiyct_b9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:animation-digital-network-light"} {...others} />);
}

export default Component;
