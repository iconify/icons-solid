import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wih274b3e.css';
import '../../css/r/rq4_dyjkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="calendar-clear-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="wih274b3e"/><path class="rq4_dyjkw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:calendar-clear-outline"} {...others} />);
}

export default Component;
