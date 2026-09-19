import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4s22dnug.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="h4s22dnug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:spaghetti-monster-flying"} {...others} />);
}

export default Component;
