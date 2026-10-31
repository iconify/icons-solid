import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xw_2p7bvv.css';
import '../../css/d/d-hwaybxo.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/so-drgbhg.css';
import '../../css/k/khqufz6yj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="xw_2p7bvv"/><path class="d-hwaybxo"/><g class="mc2zb0bvp"><circle class="so-drgbhg"/><path class="khqufz6yj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:customer"} {...others} />);
}

export default Component;
