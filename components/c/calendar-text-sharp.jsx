import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz__0t3bf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uz__0t3bf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:calendar-text-sharp"} {...others} />);
}

export default Component;
