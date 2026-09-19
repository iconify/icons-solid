import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1b4mfpxj.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="k1b4mfpxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:bag-shopping"} {...others} />);
}

export default Component;
