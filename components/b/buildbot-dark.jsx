import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibe4v6buj.css';
import '../../css/o/onpn3_b3n.css';
import '../../css/m/m-eeiib0i.css';
import '../../css/w/wagv089wb.css';
import '../../css/e/e64ypnbje.css';
import '../../css/v/vmeo7bc7y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ibe4v6buj"/><path class="onpn3_b3n"/><path class="m-eeiib0i"/><path class="wagv089wb"/><path class="e64ypnbje"/><path class="vmeo7bc7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:buildbot-dark"} {...others} />);
}

export default Component;
