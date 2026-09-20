import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p_2vumbtx.css';
import '../../css/o/omh-9ncmg.css';
import '../../css/a/a6q7xs_re.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="p_2vumbtx"/><path class="omh-9ncmg"/><path class="a6q7xs_re"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hot-spring"} {...others} />);
}

export default Component;
