import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k6axtdbom.css';
import '../../css/x/x0pbd8bzp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="k6axtdbom"/><path class="x0pbd8bzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:coupon"} {...others} />);
}

export default Component;
