import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v4u8uf5wk.css';
import '../../css/p/prqh69i6h.css';
import '../../css/i/i6un21b8g.css';
import '../../css/p/ptuap3bhk.css';
import '../../css/t/t2vg35bdy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="v4u8uf5wk"/><path class="prqh69i6h"/><path class="i6un21b8g"/><path class="ptuap3bhk"/><path class="t2vg35bdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:volume-level-high"} {...others} />);
}

export default Component;
