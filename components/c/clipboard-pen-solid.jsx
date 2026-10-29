import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vnmqkbckk.css';
import '../../css/w/w6ge37yyg.css';
import '../../css/s/sinl49bte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="vnmqkbckk"/><path class="w6ge37yyg wm-a"/><path class="sinl49bte wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clipboard-pen-solid"} {...others} />);
}

export default Component;
