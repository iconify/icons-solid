import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wqhgxabkf.css';
import '../../css/a/aeyefqb0j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="wqhgxabkf"/><path class="aeyefqb0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:game-ps"} {...others} />);
}

export default Component;
