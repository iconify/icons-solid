import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhai6mw-v.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="yhai6mw-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:graduation-cap"} {...others} />);
}

export default Component;
