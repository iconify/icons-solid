import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6uon9bsp.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="q6uon9bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:soundcloud"} {...others} />);
}

export default Component;
