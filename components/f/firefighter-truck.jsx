import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/ot18uk8ts.css';
import '../../css/f/ff3-r4bbs.css';
import '../../css/e/err_vrskx.css';
import '../../css/d/d-l3h_s4s.css';
import '../../css/k/k7l5f2bzn.css';
import '../../css/g/g4jqye3qx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ot18uk8ts"/><path class="ff3-r4bbs"/><path class="err_vrskx"/><path class="d-l3h_s4s"/><path class="k7l5f2bzn"/><path class="g4jqye3qx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:firefighter-truck"} {...others} />);
}

export default Component;
