import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gblmqib0s.css';
import '../../css/p/pem3w3rdi.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted gblmqib0s"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted pem3w3rdi"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-3--alerted switkv-0r"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:network-globe-outline-alerted"} {...others} />);
}

export default Component;
