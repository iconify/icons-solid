import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hheq_6bqv.css';
import '../../css/e/eiol0ep0o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="hheq_6bqv"/><path class="eiol0ep0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:phone-incoming"} {...others} />);
}

export default Component;
