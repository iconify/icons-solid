import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/m3b8t-b7a.css';
import '../../css/w/ww7jhxb9b.css';
import '../../css/d/dtq3ijb9h.css';
import '../../css/q/quu720b2i.css';
import '../../css/c/c3v7k3bwi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="m3b8t-b7a"/><path class="ww7jhxb9b"/><path class="dtq3ijb9h"/><path class="quu720b2i"/><path class="c3v7k3bwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:round-anchor-point"} {...others} />);
}

export default Component;
