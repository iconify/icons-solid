import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv5149b2n.css';
import '../../css/f/fc1chxb1r.css';
import '../../css/f/fhl3-hbkm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bv5149b2n"/><path class="fc1chxb1r"/><path class="fhl3-hbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ipfs-light"} {...others} />);
}

export default Component;
