import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nw5k2pbsn.css';
import '../../css/n/nrtpxxfsi.css';
import '../../css/r/rfiylib8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="nw5k2pbsn"/><path class="nrtpxxfsi wm-a"/><path class="rfiylib8m wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sparkler-solid"} {...others} />);
}

export default Component;
