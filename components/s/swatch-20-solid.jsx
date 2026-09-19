import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-zs35aly.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="h-zs35aly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:swatch-20-solid"} {...others} />);
}

export default Component;
