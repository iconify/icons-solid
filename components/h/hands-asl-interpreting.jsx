import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opi5-vb6h.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="opi5-vb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:hands-asl-interpreting"} {...others} />);
}

export default Component;
