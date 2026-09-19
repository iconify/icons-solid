import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdxhk8z_a.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="fdxhk8z_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:clarivate-square"} {...others} />);
}

export default Component;
