import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/t/thxu83myu.css';
import '../../css/l/l9p3y_bpx.css';
import '../../css/h/hy9w33b_e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="thxu83myu"/><path class="l9p3y_bpx"/><path class="hy9w33b_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tree-two"} {...others} />);
}

export default Component;
