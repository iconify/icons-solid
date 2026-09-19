import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmi_xtc0b.css';
import '../../css/h/hk0k06b_j.css';
import '../../css/y/ycl3ryg0e.css';
import '../../css/s/sdv-19hbl.css';
import '../../css/i/i72yceb1j.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--badged clr-i-outline-path-1--badged xmi_xtc0b"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged hk0k06b_j"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged ycl3ryg0e"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged sdv-19hbl"/><path class="clr-i-outline--badged clr-i-outline-path-5--badged i72yceb1j"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-6--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:bank-outline-badged"} {...others} />);
}

export default Component;
