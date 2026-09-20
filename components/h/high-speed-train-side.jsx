import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lyjbbcbnv.css';
import '../../css/b/bsqsc0x0b.css';
import '../../css/l/l30ybptyk.css';
import '../../css/m/meo43tb6e.css';
import '../../css/p/pj5i3mb8t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="lyjbbcbnv"/><path class="bsqsc0x0b"/><path class="l30ybptyk"/><path class="meo43tb6e"/><path class="pj5i3mb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:high-speed-train-side"} {...others} />);
}

export default Component;
