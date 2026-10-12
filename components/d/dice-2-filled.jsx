import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgma3pasw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vgma3pasw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:dice-2-filled"} {...others} />);
}

export default Component;
