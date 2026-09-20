import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmdn5gl4d.css';
import '../../css/f/fglfh0u3u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmdn5gl4d"/><path class="fglfh0u3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:bug-filled"} {...others} />);
}

export default Component;
