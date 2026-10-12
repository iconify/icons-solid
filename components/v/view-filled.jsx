import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy0x1-bzd.css';
import '../../css/z/z_t71ccqt.css';
import '../../css/g/glonku3gd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wy0x1-bzd"/><path clip-rule="evenodd" class="z_t71ccqt"/><path class="glonku3gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:view-filled"} {...others} />);
}

export default Component;
