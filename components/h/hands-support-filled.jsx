import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtw0ggbvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dtw0ggbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:hands-support-filled"} {...others} />);
}

export default Component;
