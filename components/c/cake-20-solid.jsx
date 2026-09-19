import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6l8k0bdh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g6l8k0bdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cake-20-solid"} {...others} />);
}

export default Component;
