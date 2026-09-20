import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4x19-bfl.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="s4x19-bfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:image-photo-composition-vertical-camera-portrait-frame-vertical-composition-photography-photo"} {...others} />);
}

export default Component;
