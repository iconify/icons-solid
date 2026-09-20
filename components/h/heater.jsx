import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d--h3ljth.css';
import '../../css/j/j9lkrp78e.css';
import '../../css/a/a38suomnn.css';
import '../../css/d/d_jkkbcpd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d--h3ljth"/><path class="j9lkrp78e"/><path class="a38suomnn"/><path class="d_jkkbcpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:heater"} {...others} />);
}

export default Component;
