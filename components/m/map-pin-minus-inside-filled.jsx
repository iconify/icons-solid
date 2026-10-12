import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzgrr6crx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vzgrr6crx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:map-pin-minus-inside-filled"} {...others} />);
}

export default Component;
