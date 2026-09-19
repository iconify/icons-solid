import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dt8jlkbav.css';
import '../../css/z/z9q2tz61p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="dt8jlkbav"/><path class="z9q2tz61p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:thumbs-up"} {...others} />);
}

export default Component;
