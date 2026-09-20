import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbkmpjbyx.css';
import '../../css/a/ag9gbdcug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vbkmpjbyx"/><path class="ag9gbdcug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:video-camera-line"} {...others} />);
}

export default Component;
