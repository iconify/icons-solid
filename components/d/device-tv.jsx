import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkcw5h-pi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hkcw5h-pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:device-tv"} {...others} />);
}

export default Component;
