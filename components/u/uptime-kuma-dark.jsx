import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktgkes3tk.css';

const viewBox = {"width":622,"height":622};
const content = `<path class="ktgkes3tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uptime-kuma-dark"} {...others} />);
}

export default Component;
