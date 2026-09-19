import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpbx2xb3r.css';

const viewBox = {"width":384,"height":448};
const content = `<path class="fpbx2xb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:video-camera"} {...others} />);
}

export default Component;
