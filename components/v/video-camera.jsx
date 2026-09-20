import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba8lzwb5c.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="ba8lzwb5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:video-camera"} {...others} />);
}

export default Component;
