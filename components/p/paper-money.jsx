import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ct7xkwr4c.css';
import '../../css/q/qpokn5rgz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ct7xkwr4c"/><path class="qpokn5rgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:paper-money"} {...others} />);
}

export default Component;
