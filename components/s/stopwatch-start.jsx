import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tbyf68bpo.css';
import '../../css/t/ts-hhubnq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="tbyf68bpo"/><path class="ts-hhubnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:stopwatch-start"} {...others} />);
}

export default Component;
