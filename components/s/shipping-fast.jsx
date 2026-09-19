import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jon4cnb6x.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="jon4cnb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:shipping-fast"} {...others} />);
}

export default Component;
