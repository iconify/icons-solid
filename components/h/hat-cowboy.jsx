import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6wl0r5te.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="c6wl0r5te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:hat-cowboy"} {...others} />);
}

export default Component;
