import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fa3_oub9i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fa3_oub9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bible-gateway-dark"} {...others} />);
}

export default Component;
