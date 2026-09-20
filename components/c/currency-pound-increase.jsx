import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r3pipwfee.css';
import '../../css/k/kg3l0zbck.css';
import '../../css/q/qem3unvew.css';
import '../../css/t/tul_hfbmt.css';
import '../../css/s/sa1tl8bfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r3pipwfee"/><path class="kg3l0zbck"/><path class="qem3unvew"/><path class="tul_hfbmt"/><path class="sa1tl8bfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:currency-pound-increase"} {...others} />);
}

export default Component;
