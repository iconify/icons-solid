import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9u-0nb5n.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="l9u-0nb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-right-circle-20-solid"} {...others} />);
}

export default Component;
