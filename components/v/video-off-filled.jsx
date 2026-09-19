import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iktrg_pfh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iktrg_pfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:video-off-filled"} {...others} />);
}

export default Component;
