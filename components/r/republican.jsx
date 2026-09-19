import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glx1udbwe.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="glx1udbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:republican"} {...others} />);
}

export default Component;
