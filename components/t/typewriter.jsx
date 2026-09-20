import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/t/tly2hm_th.css';
import '../../css/g/g-iuicizo.css';
import '../../css/e/e4weypbvx.css';
import '../../css/j/jsbzwmbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="tly2hm_th"/><path class="g-iuicizo"/><path class="e4weypbvx"/><path class="jsbzwmbxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:typewriter"} {...others} />);
}

export default Component;
