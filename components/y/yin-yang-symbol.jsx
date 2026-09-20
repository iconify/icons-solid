import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lelgk1b-s.css';
import '../../css/y/yjd5sxqdu.css';
import '../../css/c/cbc21jbch.css';
import '../../css/v/vdcypwbne.css';
import '../../css/c/c2q7rj__a.css';
import '../../css/v/vkwe_9bbq.css';
import '../../css/q/qa696ac2e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="lelgk1b-s"/><path class="yjd5sxqdu"/><path class="cbc21jbch"/><path class="vdcypwbne"/><path class="c2q7rj__a"/><path class="vkwe_9bbq"/><path class="qa696ac2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:yin-yang-symbol"} {...others} />);
}

export default Component;
