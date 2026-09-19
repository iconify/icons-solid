import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uaw58obxy.css';
import '../../css/g/g90zm0rma.css';
import '../../css/u/uvvyx1dtx.css';
import '../../css/e/eys1nnoqt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="uaw58obxy"><path class="g90zm0rma"/><path class="uvvyx1dtx"/><path class="eys1nnoqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:filter-one"} {...others} />);
}

export default Component;
