import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bo1_r_bkn.css';
import '../../css/k/k_95onbhk.css';
import '../../css/x/xy7bfo4gq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="bo1_r_bkn"/><path class="k_95onbhk"/><rect class="xy7bfo4gq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:newspaper"} {...others} />);
}

export default Component;
