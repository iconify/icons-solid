import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c98kmzb0p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c98kmzb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:drumstick-bite"} {...others} />);
}

export default Component;
