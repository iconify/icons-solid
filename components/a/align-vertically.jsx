import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jtj9ybeul.css';
import '../../css/v/v1s64tbtd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="jtj9ybeul"/><path class="v1s64tbtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:align-vertically"} {...others} />);
}

export default Component;
