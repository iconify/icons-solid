import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i41kp_bfp.css';
import '../../css/z/z8wncuzib.css';
import '../../css/j/jo99vqg6z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i41kp_bfp"/><path class="z8wncuzib"/><path class="jo99vqg6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:video-movies-square-off"} {...others} />);
}

export default Component;
