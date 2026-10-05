import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gm1kg4bns.css';
import '../../css/u/un-342unp.css';
import '../../css/l/lthd-8-lk.css';
import '../../css/k/k93q6lpfs.css';
import '../../css/v/vtuxlxfhn.css';
import '../../css/u/ub9qzcbkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="gm1kg4bns"/><path class="un-342unp"/><path class="lthd-8-lk"/><path class="k93q6lpfs"/><path class="vtuxlxfhn"/><path class="ub9qzcbkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:sliders"} {...others} />);
}

export default Component;
