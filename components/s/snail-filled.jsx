import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg1p4x-oc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fg1p4x-oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:snail-filled"} {...others} />);
}

export default Component;
