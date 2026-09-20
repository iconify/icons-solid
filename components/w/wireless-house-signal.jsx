import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rj16pnbkz.css';
import '../../css/j/jhwau62fh.css';
import '../../css/j/jscp3nbuo.css';
import '../../css/u/u8b67klrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rj16pnbkz"/><path class="jhwau62fh"/><path class="jscp3nbuo"/><path class="u8b67klrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:wireless-house-signal"} {...others} />);
}

export default Component;
