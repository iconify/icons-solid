import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb-s0g_vo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bb-s0g_vo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:delete-2-line"} {...others} />);
}

export default Component;
