import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx-12vb8f.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="gx-12vb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:music-note-off-2-solid"} {...others} />);
}

export default Component;
