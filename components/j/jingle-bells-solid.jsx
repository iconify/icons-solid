import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lpi14_ivq.css';
import '../../css/v/vldr-ib_b.css';
import '../../css/j/ji-2eztyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="lpi14_ivq"/><path class="vldr-ib_b wm-a"/><path class="ji-2eztyl wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:jingle-bells-solid"} {...others} />);
}

export default Component;
