import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k2j8b1jba.css';
import '../../css/a/aykj1mb7m.css';
import '../../css/i/ik07xqb4l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="k2j8b1jba"/><path class="aykj1mb7m"/><path class="ik07xqb4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:guide-board"} {...others} />);
}

export default Component;
