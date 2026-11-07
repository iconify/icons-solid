import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_o_lwkuc.css';
import '../../css/x/xjaw9ykwq.css';
import '../../css/x/xri1c9bdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_o_lwkuc"/><path class="xjaw9ykwq"/><path clip-rule="evenodd" class="xri1c9bdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-bold-circle-bold"} {...others} />);
}

export default Component;
