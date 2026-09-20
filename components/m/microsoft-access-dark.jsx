import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh5dkdbpg.css';
import '../../css/p/p1b5fubnd.css';
import '../../css/m/mu_ktials.css';
import '../../css/v/vvmcp5lth.css';
import '../../css/n/nzm11-kxt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hh5dkdbpg"/><path class="p1b5fubnd"/><path class="mu_ktials"/><path class="vvmcp5lth"/><path class="nzm11-kxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-access-dark"} {...others} />);
}

export default Component;
