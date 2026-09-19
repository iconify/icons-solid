import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lmtzawoqi.css';
import '../../css/p/pfos4ebhf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="lmtzawoqi"/><path class="pfos4ebhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:fork"} {...others} />);
}

export default Component;
