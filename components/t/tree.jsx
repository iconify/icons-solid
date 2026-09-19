import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy_3j5b9b.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="fy_3j5b9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:tree"} {...others} />);
}

export default Component;
