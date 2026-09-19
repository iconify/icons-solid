import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/on1kopb6o.css';
import '../../css/i/i1jcq5b5k.css';
import '../../css/x/xkitpccfs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="on1kopb6o"/><path class="i1jcq5b5k"/><path class="xkitpccfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:change-date-sort"} {...others} />);
}

export default Component;
