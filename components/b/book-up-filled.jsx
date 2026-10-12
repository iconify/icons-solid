import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kip_gc83p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kip_gc83p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-up-filled"} {...others} />);
}

export default Component;
