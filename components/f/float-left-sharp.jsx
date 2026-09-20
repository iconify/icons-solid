import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9iy4zb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9iy4zb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:float-left-sharp"} {...others} />);
}

export default Component;
