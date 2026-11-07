import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqc3njjlu.css';
import '../../css/s/skij5-7yd.css';
import '../../css/d/d03fu6wuk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqc3njjlu"/><path clip-rule="evenodd" class="skij5-7yd"/><path class="d03fu6wuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-music-note-bold-duotone"} {...others} />);
}

export default Component;
