import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v1s64tbtd.css';
import '../../css/l/lj_sgjo0o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="v1s64tbtd"/><path class="lj_sgjo0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:flip-vertically"} {...others} />);
}

export default Component;
