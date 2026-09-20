import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xlsu0kbaj.css';
import '../../css/q/qtocclbql.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="xlsu0kbaj"/><path class="qtocclbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:calculator-1"} {...others} />);
}

export default Component;
