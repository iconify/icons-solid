import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhn1d58yx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhn1d58yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:x-ray-outline"} {...others} />);
}

export default Component;
