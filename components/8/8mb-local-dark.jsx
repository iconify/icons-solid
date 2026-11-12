import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc6q_garz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cc6q_garz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:8mb-local-dark"} {...others} />);
}

export default Component;
