import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq8bzlb8n.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="tq8bzlb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:vihara"} {...others} />);
}

export default Component;
