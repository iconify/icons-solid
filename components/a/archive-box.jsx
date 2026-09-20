import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lzsqtmb4w.css';
import '../../css/y/yd48mxb5z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="lzsqtmb4w"/><path class="yd48mxb5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:archive-box"} {...others} />);
}

export default Component;
