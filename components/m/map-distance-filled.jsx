import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9ljbbcsg.css';
import '../../css/m/mhbz-4bgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m9ljbbcsg"/><path class="mhbz-4bgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-distance-filled"} {...others} />);
}

export default Component;
