import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtsjshfvz.css';
import '../../css/m/m1cu4sbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mtsjshfvz"/><path class="m1cu4sbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-badge-filled"} {...others} />);
}

export default Component;
