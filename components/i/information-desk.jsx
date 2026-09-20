import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nnd6yxcva.css';
import '../../css/r/ruai2xbbq.css';
import '../../css/g/guy0gtbhh.css';
import '../../css/h/hl27mebpa.css';
import '../../css/z/zkbimfzak.css';
import '../../css/i/i-hu_c_vp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nnd6yxcva"/><path class="ruai2xbbq"/><path class="guy0gtbhh"/><path class="hl27mebpa"/><path class="zkbimfzak"/><path class="i-hu_c_vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:information-desk"} {...others} />);
}

export default Component;
