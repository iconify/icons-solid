import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq2e-e9in.css';
import '../../css/i/iff_1r--g.css';
import '../../css/k/kacn3iyqp.css';
import '../../css/r/r_hepjbqz.css';
import '../../css/r/rr1al2buc.css';
import '../../css/b/bm14uabnd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="bq2e-e9in"><path class="iff_1r--g"/><path class="kacn3iyqp"/><path class="r_hepjbqz"/><path class="rr1al2buc"/><path class="bm14uabnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:import-and-export"} {...others} />);
}

export default Component;
