import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy6cmybio.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="wy6cmybio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:speaker-1-remix"} {...others} />);
}

export default Component;
