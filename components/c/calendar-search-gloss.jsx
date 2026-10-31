import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a3-aj0bzq.css';
import '../../css/y/ydpa3htza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="a3-aj0bzq wm-k"/><path class="wm-s ydpa3htza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-search-gloss"} {...others} />);
}

export default Component;
