import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_flrekgq.css';
import '../../css/k/k3o277bnc.css';
import '../../css/o/okdmb64yp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v_flrekgq"/><path class="k3o277bnc"/><path class="okdmb64yp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:fingerprint"} {...others} />);
}

export default Component;
