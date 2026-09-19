import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfrv9c1za.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yfrv9c1za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:forward-20-solid"} {...others} />);
}

export default Component;
