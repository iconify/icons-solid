import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfj8gvdlk.css';
import '../../css/v/vlqkedb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfj8gvdlk"/><path class="vlqkedb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:image-on"} {...others} />);
}

export default Component;
