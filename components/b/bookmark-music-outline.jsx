import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwja3t83w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dwja3t83w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bookmark-music-outline"} {...others} />);
}

export default Component;
