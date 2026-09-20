import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obeyg0bao.css';
import '../../css/f/f-2icjb3s.css';
import '../../css/o/oulxb_boa.css';
import '../../css/v/v9zd7im2r.css';
import '../../css/m/ma1wmibnc.css';
import '../../css/k/k0zmq-opt.css';
import '../../css/d/dcrl0dbdv.css';
import '../../css/n/nr0wsb-gq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="obeyg0bao"/><path class="f-2icjb3s"/><path class="oulxb_boa"/><path class="v9zd7im2r"/><path class="ma1wmibnc"/><path class="k0zmq-opt"/><path class="dcrl0dbdv"/><path class="nr0wsb-gq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cow-face"} {...others} />);
}

export default Component;
