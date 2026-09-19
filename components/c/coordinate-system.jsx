import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q7tct1bfp.css';
import '../../css/t/ty4d2jlgr.css';
import '../../css/h/h1vo1h1bn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="q7tct1bfp"/><path class="ty4d2jlgr"/><path class="h1vo1h1bn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:coordinate-system"} {...others} />);
}

export default Component;
