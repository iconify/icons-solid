import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qokg--b2b.css';
import '../../css/w/w8a--id8n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="qokg--b2b"/><path class="w8a--id8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:flashlight"} {...others} />);
}

export default Component;
