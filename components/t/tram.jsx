import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1ou0nb2u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o1ou0nb2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:tram"} {...others} />);
}

export default Component;
