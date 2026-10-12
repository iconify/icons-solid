import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxvb6cctw.css';
import '../../css/n/n5sg21b7n.css';
import '../../css/z/zj890cb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxvb6cctw"/><path class="n5sg21b7n"/><path class="zj890cb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sticky-note-check-filled"} {...others} />);
}

export default Component;
