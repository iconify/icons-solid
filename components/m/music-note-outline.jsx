import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi--f2b9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wi--f2b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-outline"} {...others} />);
}

export default Component;
