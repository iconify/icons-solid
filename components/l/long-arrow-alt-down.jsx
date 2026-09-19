import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb34d8b-y.css';

const viewBox = {"width":256,"height":512};
const content = `<path class="pb34d8b-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:long-arrow-alt-down"} {...others} />);
}

export default Component;
