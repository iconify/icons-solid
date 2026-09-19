import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/squ9mdoiy.css';
import '../../css/r/rwtqvyb2j.css';
import '../../css/z/z4-wdckpa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="squ9mdoiy"/><path class="rwtqvyb2j"/><path class="z4-wdckpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rule-two"} {...others} />);
}

export default Component;
