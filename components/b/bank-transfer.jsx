import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/i5xriabpc.css';
import '../../css/j/juzlxjb7o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="i5xriabpc"/><path class="juzlxjb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bank-transfer"} {...others} />);
}

export default Component;
