import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srt0sd2qy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="srt0sd2qy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:battery-full-sharp"} {...others} />);
}

export default Component;
