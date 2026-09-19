import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/j/jn55kmf9s.css';
import '../../css/w/wk1ul1j_g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="jn55kmf9s"/><path class="wk1ul1j_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:maya"} {...others} />);
}

export default Component;
