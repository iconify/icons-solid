import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1rk6ccif.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n1rk6ccif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:amicoscript-dark"} {...others} />);
}

export default Component;
