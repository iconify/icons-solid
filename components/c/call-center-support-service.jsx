import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j4-iarbmd.css';
import '../../css/k/kqrzoccqs.css';
import '../../css/s/s7ov9p60n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="j4-iarbmd"/><path class="kqrzoccqs"/><path class="s7ov9p60n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:call-center-support-service"} {...others} />);
}

export default Component;
