import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv2rulbdl.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="cv2rulbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:user-identifier-card-solid"} {...others} />);
}

export default Component;
