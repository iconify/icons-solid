import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rwog68bpz.css';
import '../../css/a/au2jgvocl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="rwog68bpz"/><path class="au2jgvocl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:equalizer"} {...others} />);
}

export default Component;
