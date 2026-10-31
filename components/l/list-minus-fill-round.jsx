import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7wu9kboj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y7wu9kboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-minus-fill-round"} {...others} />);
}

export default Component;
