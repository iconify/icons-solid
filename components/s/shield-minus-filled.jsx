import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9_i5epxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w9_i5epxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-minus-filled"} {...others} />);
}

export default Component;
