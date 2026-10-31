import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2-1h09ms.css';
import '../../css/t/tmujcdc0i.css';
import '../../css/g/gz67e_bof.css';
import '../../css/s/swrklbz2f.css';
import '../../css/l/lflm6cbuo.css';
import '../../css/x/x4a-iabkn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="u2-1h09ms"/><path class="tmujcdc0i"/><path class="gz67e_bof"/><path class="swrklbz2f"/><path class="lflm6cbuo"/><path class="x4a-iabkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:microphone-3-pop"} {...others} />);
}

export default Component;
