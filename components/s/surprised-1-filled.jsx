import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewlmo7vkk.css';
import '../../css/m/m3wlzfy-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ewlmo7vkk"/><path class="m3wlzfy-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:surprised-1-filled"} {...others} />);
}

export default Component;
