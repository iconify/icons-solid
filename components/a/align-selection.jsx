import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/kiri2bcdh.css';
import '../../css/w/wlfrhd-pk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="kiri2bcdh"/><path class="wlfrhd-pk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:align-selection"} {...others} />);
}

export default Component;
