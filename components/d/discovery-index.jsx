import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hq2b25tos.css';
import '../../css/j/jmb7mjbbb.css';
import '../../css/e/eod7x15fz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="hq2b25tos"/><path class="jmb7mjbbb"/><path class="eod7x15fz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:discovery-index"} {...others} />);
}

export default Component;
