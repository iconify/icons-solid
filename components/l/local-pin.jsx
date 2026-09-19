import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cu8b2wb6l.css';
import '../../css/o/ok5knhbhc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="cu8b2wb6l"/><path class="ok5knhbhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:local-pin"} {...others} />);
}

export default Component;
