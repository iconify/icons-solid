import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6f3dfbkt.css';
import '../../css/a/a67_ne9yr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d6f3dfbkt"/><path class="a67_ne9yr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:nut-off-filled"} {...others} />);
}

export default Component;
