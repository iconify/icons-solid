import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0x804ply.css';
import '../../css/f/f8hzr132d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i0x804ply"/><path class="f8hzr132d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-comment"} {...others} />);
}

export default Component;
