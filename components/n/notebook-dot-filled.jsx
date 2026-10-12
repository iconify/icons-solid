import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vukzqzkbe.css';
import '../../css/p/p_hkdzbze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vukzqzkbe"/><path class="p_hkdzbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:notebook-dot-filled"} {...others} />);
}

export default Component;
