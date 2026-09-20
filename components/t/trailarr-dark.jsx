import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnhbskd2a.css';
import '../../css/b/bnsgscc2v.css';
import '../../css/f/f2_b1ubxm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tnhbskd2a"/><path class="bnsgscc2v"/><path class="f2_b1ubxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:trailarr-dark"} {...others} />);
}

export default Component;
