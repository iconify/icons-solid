import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa5fubcqx.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="pa5fubcqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:bacteria"} {...others} />);
}

export default Component;
