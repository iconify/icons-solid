import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odircabyp.css';
import '../../css/e/ec_qsfszq.css';
import '../../css/w/w5p5w4_bh.css';
import '../../css/r/rw7ssw4fj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="odircabyp"/><path class="ec_qsfszq"/><path class="w5p5w4_bh"/><path class="rw7ssw4fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-filter"} {...others} />);
}

export default Component;
