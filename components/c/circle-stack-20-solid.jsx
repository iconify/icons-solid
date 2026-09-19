import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km7x9fxam.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="km7x9fxam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:circle-stack-20-solid"} {...others} />);
}

export default Component;
