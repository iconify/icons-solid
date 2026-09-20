import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmv64kb3y.css';
import '../../css/i/i0y_0bc6h.css';
import '../../css/k/kzdoctbde.css';
import '../../css/m/m8r8jhb2o.css';
import '../../css/z/zb05pv2-l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cmv64kb3y"/><path class="i0y_0bc6h"/><path class="kzdoctbde"/><path class="m8r8jhb2o"/><path class="zb05pv2-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:microphone"} {...others} />);
}

export default Component;
