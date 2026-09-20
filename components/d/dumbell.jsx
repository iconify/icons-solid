import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d6pxcdb8b.css';
import '../../css/n/newf1ibho.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="d6pxcdb8b"/><path class="newf1ibho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dumbell"} {...others} />);
}

export default Component;
