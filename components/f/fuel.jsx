import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z-bhm1lee.css';
import '../../css/h/hdfqadb5g.css';
import '../../css/k/ki_mm7b7w.css';
import '../../css/r/rohj23bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z-bhm1lee"/><path class="hdfqadb5g"/><path class="ki_mm7b7w"/><path class="rohj23bqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fuel"} {...others} />);
}

export default Component;
