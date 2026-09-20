import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/ucp-lmxsk.css';
import '../../css/k/kyiuc3bfe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ucp-lmxsk"/><path class="kyiuc3bfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:reply-to-message-typing"} {...others} />);
}

export default Component;
