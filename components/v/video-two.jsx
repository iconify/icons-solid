import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qzkhf9znl.css';
import '../../css/w/wyl_g7a6x.css';
import '../../css/q/qbk8l2bvl.css';
import '../../css/o/oboih_b9o.css';
import '../../css/n/nouq6rbjk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qzkhf9znl"/><path class="wyl_g7a6x"/><path class="qbk8l2bvl"/><path class="oboih_b9o"/><path class="nouq6rbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:video-two"} {...others} />);
}

export default Component;
