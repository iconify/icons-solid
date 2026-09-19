import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjf65-bia.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="zjf65-bia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:italic-20-solid"} {...others} />);
}

export default Component;
