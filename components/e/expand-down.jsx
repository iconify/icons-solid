import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqsv2rbee.css';
import '../../css/d/d38-6mbrk.css';
import '../../css/v/vmf1j-b3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dqsv2rbee"/><path class="d38-6mbrk"/><path class="vmf1j-b3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:expand-down"} {...others} />);
}

export default Component;
