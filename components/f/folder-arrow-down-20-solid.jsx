import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5q6tg5iy.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="r5q6tg5iy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:folder-arrow-down-20-solid"} {...others} />);
}

export default Component;
