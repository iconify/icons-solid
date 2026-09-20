import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5gsj2b5q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c5gsj2b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nforwardauth-dark"} {...others} />);
}

export default Component;
