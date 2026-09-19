import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/f/fk8rx5cwz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="r8cyu3bwz"/><path class="fk8rx5cwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:expand-up"} {...others} />);
}

export default Component;
