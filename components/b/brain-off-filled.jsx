import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp4eihbdx.css';
import '../../css/v/vox3mdpjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hp4eihbdx"/><path class="vox3mdpjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brain-off-filled"} {...others} />);
}

export default Component;
