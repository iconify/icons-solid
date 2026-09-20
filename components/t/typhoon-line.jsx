import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdb0sxb4a.css';
import '../../css/x/x14f6wb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xdb0sxb4a"/><path class="x14f6wb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:typhoon-line"} {...others} />);
}

export default Component;
