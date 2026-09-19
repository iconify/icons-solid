import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv2mi3g-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cv2mi3g-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:thunder-filled"} {...others} />);
}

export default Component;
