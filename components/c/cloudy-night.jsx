import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/l6-wjzcgj.css';
import '../../css/h/h3uu8fbrf.css';
import '../../css/p/pv14qwbuv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="l6-wjzcgj"/><path class="h3uu8fbrf"/><path class="pv14qwbuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cloudy-night"} {...others} />);
}

export default Component;
