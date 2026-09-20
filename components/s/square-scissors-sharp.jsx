import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsc84_2my.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lsc84_2my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:square-scissors-sharp"} {...others} />);
}

export default Component;
