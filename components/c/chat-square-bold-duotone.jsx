import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i45zppjnu.css';
import '../../css/u/u4oiq_b1p.css';
import '../../css/y/yil3q6l6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i45zppjnu"/><path clip-rule="evenodd" class="u4oiq_b1p"/><path class="yil3q6l6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-bold-duotone"} {...others} />);
}

export default Component;
