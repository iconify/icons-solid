import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yismpnbbv.css';
import '../../css/s/sqh8rebfr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yismpnbbv"/><path clip-rule="evenodd" class="sqh8rebfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bot-plus-filled"} {...others} />);
}

export default Component;
