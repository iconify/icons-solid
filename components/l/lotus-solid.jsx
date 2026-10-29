import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kxk0owo3y.css';
import '../../css/l/l3aq1cc4z.css';
import '../../css/m/mxmgh8byi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="kxk0owo3y"/><path class="l3aq1cc4z wm-a"/><path class="mxmgh8byi wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lotus-solid"} {...others} />);
}

export default Component;
