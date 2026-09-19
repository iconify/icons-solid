import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc1nhbbxc.css';
import '../../css/j/j3zfux-3r.css';
import '../../css/m/m1e19mbpk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-outline clr-i-outline-path-1 uc1nhbbxc"/><circle class="clr-i-outline clr-i-outline-path-2 j3zfux-3r"/><path class="clr-i-outline clr-i-outline-path-3 m1e19mbpk"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:shopping-cart-line"} {...others} />);
}

export default Component;
