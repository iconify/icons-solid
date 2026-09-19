import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xec3vnbkw.css';
import '../../css/a/ae1yn9bmd.css';
import '../../css/g/gebol1b0i.css';
import '../../css/c/cscnp3bfr.css';
import '../../css/i/ivkqi0byd.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted xec3vnbkw"/><path class="ae1yn9bmd clr-i-outline--alerted clr-i-outline-path-2--alerted"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted gebol1b0i"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted cscnp3bfr"/><path class="clr-i-outline--alerted clr-i-outline-path-5--alerted ivkqi0byd"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-6--alerted switkv-0r"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:rack-server-outline-alerted"} {...others} />);
}

export default Component;
