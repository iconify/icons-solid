import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7ryo4pfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e7ryo4pfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:emoji-sticker-fill"} {...others} />);
}

export default Component;
