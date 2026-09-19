import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq8d756sd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dq8d756sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:video-camera-off-filled"} {...others} />);
}

export default Component;
