import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpp-g8bsf.css';
import '../../css/b/bpxp7ibrd.css';
import '../../css/w/wif-qfexr.css';
import '../../css/i/irholib5m.css';
import '../../css/n/nmzgrub5r.css';
import '../../css/v/v1lf5ybdm.css';
import '../../css/q/qn0e81bwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dpp-g8bsf"/><path class="bpxp7ibrd"/><rect class="wif-qfexr"/><rect class="irholib5m"/><path class="nmzgrub5r"/><rect class="v1lf5ybdm"/><path class="qn0e81bwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-vpn"} {...others} />);
}

export default Component;
