import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/brlq74b8o.css';
import '../../css/b/bywvdos1b.css';
import '../../css/k/kjqls4k3a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="brlq74b8o"/><path class="bywvdos1b"/><path class="kjqls4k3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:curves-levels-graph"} {...others} />);
}

export default Component;
