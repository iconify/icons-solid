import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aw5e29kst.css';
import '../../css/k/kr9kmutvq.css';
import '../../css/r/rk4_9rbwv.css';
import '../../css/m/mt9npk33j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-45 32.27 1.4)scale(1 -1)" class="aw5e29kst"/><rect transform="rotate(-45 26.54 -12.43)scale(1 -1)" class="kr9kmutvq"/><path class="rk4_9rbwv"/><path class="mt9npk33j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chocolate-bar"} {...others} />);
}

export default Component;
