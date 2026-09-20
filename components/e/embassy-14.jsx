import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv2_7ilyy.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="cv2_7ilyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:embassy-14"} {...others} />);
}

export default Component;
