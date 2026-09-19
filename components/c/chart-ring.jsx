import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bzk2ng9yc.css';
import '../../css/n/n7vt03o9b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="bzk2ng9yc"/><path class="n7vt03o9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chart-ring"} {...others} />);
}

export default Component;
