import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qvwh-3bss.css';
import '../../css/h/h13c8cb6j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="qvwh-3bss"/><path class="h13c8cb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:check-one"} {...others} />);
}

export default Component;
