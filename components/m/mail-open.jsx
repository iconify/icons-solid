import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nccxm69sg.css';
import '../../css/h/hvzd0ubol.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="nccxm69sg"/><path class="hvzd0ubol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mail-open"} {...others} />);
}

export default Component;
