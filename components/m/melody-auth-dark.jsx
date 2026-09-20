import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqppkb4wy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iqppkb4wy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:melody-auth-dark"} {...others} />);
}

export default Component;
