import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/d/d18fr-b_e.css';
import '../../css/j/j7-vsc_mc.css';
import '../../css/d/dw5jrb3yq.css';
import '../../css/f/fp4xfkbkn.css';
import '../../css/z/zx06p67jt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="d18fr-b_e"/><path class="j7-vsc_mc"/><path class="dw5jrb3yq"/><path class="fp4xfkbkn"/><path class="zx06p67jt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:iwatch"} {...others} />);
}

export default Component;
