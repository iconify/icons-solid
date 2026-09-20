import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2f8b2rvm.css';
import '../../css/k/k_wh-tamw.css';
import '../../css/q/qu42ndbsv.css';
import '../../css/q/qcj86obbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d2f8b2rvm"/><path class="k_wh-tamw"/><path class="qu42ndbsv"/><path class="qcj86obbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:hospital-1"} {...others} />);
}

export default Component;
