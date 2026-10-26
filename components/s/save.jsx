import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/tukj1xbmg.css';
import '../../css/x/x2n8nub6m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="tukj1xbmg"/><path class="x2n8nub6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:save"} {...others} />);
}

export default Component;
