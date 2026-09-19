import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpy4myw3d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tpy4myw3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:video-camera-slash-20-solid"} {...others} />);
}

export default Component;
