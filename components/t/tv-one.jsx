import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/trpmdpxsa.css';
import '../../css/r/r367603ti.css';
import '../../css/e/e3js6e8az.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="trpmdpxsa"/><path class="r367603ti"/><path class="e3js6e8az"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tv-one"} {...others} />);
}

export default Component;
