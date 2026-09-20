import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/vkd5hjbyt.css';
import '../../css/x/xmsl8rfmo.css';
import '../../css/e/e8uc85bqm.css';
import '../../css/m/mr8upu4-h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="vkd5hjbyt"/><path class="xmsl8rfmo"/><path class="e8uc85bqm"/><path class="mr8upu4-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cyborg-2"} {...others} />);
}

export default Component;
