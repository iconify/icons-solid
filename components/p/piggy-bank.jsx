import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qmokd4o7b.css';
import '../../css/n/n6zsc5g_g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="qmokd4o7b"/><path class="n6zsc5g_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:piggy-bank"} {...others} />);
}

export default Component;
