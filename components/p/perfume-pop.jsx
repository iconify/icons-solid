import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ctank51on.css';
import '../../css/j/jwu8oqnzy.css';
import '../../css/f/f1_e7q3dc.css';
import '../../css/t/th1qtmb2o.css';
import '../../css/r/rsm-pzbmt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ctank51on"/><path class="jwu8oqnzy"/><path class="f1_e7q3dc"/><path class="th1qtmb2o"/><path class="rsm-pzbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:perfume-pop"} {...others} />);
}

export default Component;
