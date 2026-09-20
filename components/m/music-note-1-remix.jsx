import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6d1w-b2l.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="q6d1w-b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:music-note-1-remix"} {...others} />);
}

export default Component;
