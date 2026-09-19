import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0l45-b3u.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="l0l45-b3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:menu-alt-1"} {...others} />);
}

export default Component;
