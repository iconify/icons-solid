import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7ij-6bcu.css';

const viewBox = {"width":256,"height":512};
const content = `<path class="c7ij-6bcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:long-arrow-alt-up"} {...others} />);
}

export default Component;
