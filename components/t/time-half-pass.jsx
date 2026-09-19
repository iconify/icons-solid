import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/avo-_rbdv.css';
import '../../css/v/vvm_1sbqe.css';
import '../../css/z/znqljt_fj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="avo-_rbdv"/><path class="vvm_1sbqe"/><path class="znqljt_fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:time-half-pass"} {...others} />);
}

export default Component;
