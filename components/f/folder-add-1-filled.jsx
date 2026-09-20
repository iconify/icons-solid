import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whte9obio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="whte9obio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:folder-add-1-filled"} {...others} />);
}

export default Component;
