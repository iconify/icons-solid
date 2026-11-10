import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rcln-ibxk.css';
import '../../css/u/u_is3mi2v.css';
import '../../css/i/itba1rjmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rcln-ibxk"/><path class="u_is3mi2v"/><path class="itba1rjmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-cursor-text"} {...others} />);
}

export default Component;
