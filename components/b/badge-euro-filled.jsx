import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8or5jvtk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i8or5jvtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:badge-euro-filled"} {...others} />);
}

export default Component;
