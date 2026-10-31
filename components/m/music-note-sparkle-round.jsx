import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfyxu1xww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfyxu1xww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:music-note-sparkle-round"} {...others} />);
}

export default Component;
