import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy61_00yi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iy61_00yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:candy-2-line"} {...others} />);
}

export default Component;
