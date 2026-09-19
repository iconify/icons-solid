import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/e/enw8ysjww.css';
import '../../css/h/h8bd5tv9f.css';
import '../../css/l/lkb7etlcq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="enw8ysjww"/><path class="h8bd5tv9f"/><path class="lkb7etlcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:connection-point"} {...others} />);
}

export default Component;
