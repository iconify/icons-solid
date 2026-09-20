import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6q78qbwx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m6q78qbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:play-outline"} {...others} />);
}

export default Component;
