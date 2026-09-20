import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uv-7bgz2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uv-7bgz2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-3-outline"} {...others} />);
}

export default Component;
