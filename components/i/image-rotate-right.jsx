import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf--d4iuz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tf--d4iuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:image-rotate-right"} {...others} />);
}

export default Component;
