import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhc0pb2vu.css';

const viewBox = {"width":328,"height":512};
const content = `<path class="nhc0pb2vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:watch"} {...others} />);
}

export default Component;
