import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/plvuzbc9m.css';
import '../../css/y/yxf6qh58r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="plvuzbc9m"/><path class="yxf6qh58r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:waving-hand"} {...others} />);
}

export default Component;
