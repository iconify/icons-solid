import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq2hqvwyz.css';
import '../../css/q/q5070xbhz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xq2hqvwyz"/><path class="q5070xbhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-to-folder-bold-duotone"} {...others} />);
}

export default Component;
