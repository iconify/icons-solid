import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kuyyqyb3r.css';
import '../../css/a/au2axfpqi.css';
import '../../css/n/naq93vzxl.css';
import '../../css/z/zt15rdbux.css';
import '../../css/t/tq_qz2g5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kuyyqyb3r"/><path class="au2axfpqi"/><path class="naq93vzxl"/><path class="zt15rdbux"/><path class="tq_qz2g5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:podcast"} {...others} />);
}

export default Component;
