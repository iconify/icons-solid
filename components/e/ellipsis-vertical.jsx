import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3fjp7b0s.css';

const viewBox = {"width":128,"height":512};
const content = `<path class="f3fjp7b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:ellipsis-vertical"} {...others} />);
}

export default Component;
