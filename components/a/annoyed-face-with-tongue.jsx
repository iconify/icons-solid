import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fagu12ble.css';
import '../../css/y/ythw48bxz.css';
import '../../css/t/to5_hpm1w.css';
import '../../css/u/u_t6qhnad.css';
import '../../css/j/j_8s7b8vp.css';
import '../../css/i/iemdzcc_t.css';
import '../../css/s/sd1ih4xjz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fagu12ble"/><path class="ythw48bxz"/><g class="to5_hpm1w"><circle class="u_t6qhnad"/><path class="j_8s7b8vp"/><path class="iemdzcc_t"/><path class="sd1ih4xjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:annoyed-face-with-tongue"} {...others} />);
}

export default Component;
