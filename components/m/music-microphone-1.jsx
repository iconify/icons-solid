import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgmz4lbip.css';
import '../../css/v/vaynj5-ur.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pgmz4lbip"/><path class="vaynj5-ur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:music-microphone-1"} {...others} />);
}

export default Component;
