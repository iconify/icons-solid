import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2ab7w3yd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p2ab7w3yd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-angle-broken"} {...others} />);
}

export default Component;
