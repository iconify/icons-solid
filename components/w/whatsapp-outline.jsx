import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2llag50o.css';
import '../../css/l/lq4vgwbul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x2llag50o"/><path clip-rule="evenodd" class="lq4vgwbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:whatsapp-outline"} {...others} />);
}

export default Component;
