import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pi8i8d0dt.css';
import '../../css/m/mgrdfsbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pi8i8d0dt"/><path clip-rule="evenodd" class="mgrdfsbgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-key-filled"} {...others} />);
}

export default Component;
