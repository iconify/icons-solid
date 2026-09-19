import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/smw8n4bjx.css';
import '../../css/o/oyi_24bwa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="smw8n4bjx"/><path class="oyi_24bwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:card-two"} {...others} />);
}

export default Component;
