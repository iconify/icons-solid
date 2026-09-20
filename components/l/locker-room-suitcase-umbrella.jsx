import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mwtofibaa.css';
import '../../css/h/h0sixgbyk.css';
import '../../css/f/f-n-q3bfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mwtofibaa"/><path class="h0sixgbyk"/><path class="f-n-q3bfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:locker-room-suitcase-umbrella"} {...others} />);
}

export default Component;
