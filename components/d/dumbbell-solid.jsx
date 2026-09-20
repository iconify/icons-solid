import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orcy-v-bg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="orcy-v-bg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:dumbbell-solid"} {...others} />);
}

export default Component;
