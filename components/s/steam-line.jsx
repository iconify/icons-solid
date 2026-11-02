import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwc_y5dxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwc_y5dxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:steam-line"} {...others} />);
}

export default Component;
