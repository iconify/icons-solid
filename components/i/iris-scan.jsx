import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mvv4-kb5c.css';
import '../../css/a/a_qdmqx0x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="mvv4-kb5c"/><path class="a_qdmqx0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:iris-scan"} {...others} />);
}

export default Component;
