import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhg5h_ghh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uhg5h_ghh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:note-sparkle-corner-fill-round"} {...others} />);
}

export default Component;
