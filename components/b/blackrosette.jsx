import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx8flbcue.css';
import '../../css/b/bcxczsbsq.css';
import '../../css/v/vt_upswac.css';
import '../../css/u/uacfgoblp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dx8flbcue"/><path class="bcxczsbsq"/><circle class="vt_upswac"/><circle class="uacfgoblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackrosette"} {...others} />);
}

export default Component;
