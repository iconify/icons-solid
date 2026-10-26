import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/b6f73j5sr.css';
import '../../css/x/xe4j2ovyi.css';
import '../../css/x/xxvel3-en.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="b6f73j5sr"/><path class="xe4j2ovyi"/><path class="xxvel3-en"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:table"} {...others} />);
}

export default Component;
