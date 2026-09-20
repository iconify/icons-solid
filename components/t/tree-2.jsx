import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/x_74_wbzq.css';
import '../../css/x/xy99vvbdw.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="x_74_wbzq"/><path class="xy99vvbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:tree-2"} {...others} />);
}

export default Component;
