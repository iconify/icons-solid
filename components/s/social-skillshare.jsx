import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpxrm4sfi.css';
import '../../css/i/izr5nurmq.css';
import '../../css/u/u9bid-erq.css';
import '../../css/o/ogibbhbay.css';
import '../../css/z/zcgznuxmm.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="tpxrm4sfi"/><path class="izr5nurmq"/><path class="u9bid-erq"/><path class="ogibbhbay"/><path class="zcgznuxmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-skillshare"} {...others} />);
}

export default Component;
