import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzvlchb2u.css';
import '../../css/w/w1yuff-ay.css';
import '../../css/d/diidstw8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vzvlchb2u"/><path clip-rule="evenodd" class="w1yuff-ay"/><path class="diidstw8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:galaxy-filled"} {...others} />);
}

export default Component;
