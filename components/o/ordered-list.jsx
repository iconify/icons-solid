import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s0_p4-b9s.css';
import '../../css/b/bpym8ob1o.css';
import '../../css/c/c_kr2t0qf.css';
import '../../css/n/n22i8yb3t.css';
import '../../css/h/hqd2_rbdw.css';
import '../../css/d/d200jpblz.css';
import '../../css/o/o5is3vn9e.css';
import '../../css/r/r6jxt2gmu.css';
import '../../css/i/isq7s6h8y.css';
import '../../css/m/mejbyebtl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="s0_p4-b9s"/><path class="bpym8ob1o"/><path class="c_kr2t0qf"/><path class="n22i8yb3t"/><path class="hqd2_rbdw"/><path class="d200jpblz"/><path class="o5is3vn9e"/><path class="r6jxt2gmu"/><path class="isq7s6h8y"/><path class="mejbyebtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ordered-list"} {...others} />);
}

export default Component;
