import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aad6nz3iu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aad6nz3iu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:video-camera-2-line"} {...others} />);
}

export default Component;
