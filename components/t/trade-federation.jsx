import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3k_xj7cj.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="r3k_xj7cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:trade-federation"} {...others} />);
}

export default Component;
