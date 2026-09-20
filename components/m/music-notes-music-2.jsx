import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owuglzbel.css';
import '../../css/f/f0zfi2mjl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="owuglzbel"/><path class="f0zfi2mjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:music-notes-music-2"} {...others} />);
}

export default Component;
