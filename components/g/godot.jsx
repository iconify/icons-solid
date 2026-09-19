import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt_bw5fgq.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="yt_bw5fgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:godot"} {...others} />);
}

export default Component;
