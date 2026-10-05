import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xy71q67bi.css';
import '../../css/f/f3s2fab-i.css';
import '../../css/w/wa2w2_b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="xy71q67bi"/><path class="f3s2fab-i"/><path class="wa2w2_b7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:t-square"} {...others} />);
}

export default Component;
