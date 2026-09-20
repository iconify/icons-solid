import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/f-q3bub4o.css';
import '../../css/e/e75ao5bmn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="f-q3bub4o"/><path class="e75ao5bmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:no-touch-sign"} {...others} />);
}

export default Component;
