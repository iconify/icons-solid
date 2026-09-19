import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9jx4mbxy.css';

const viewBox = {"width":192,"height":512};
const content = `<path class="z9jx4mbxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:info"} {...others} />);
}

export default Component;
