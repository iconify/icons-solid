import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r43chccsk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r43chccsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-slider-2-outline"} {...others} />);
}

export default Component;
