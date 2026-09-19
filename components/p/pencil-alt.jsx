import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylte6_80y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ylte6_80y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:pencil-alt"} {...others} />);
}

export default Component;
