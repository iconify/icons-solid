import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu3nx1j7v.css';
import '../../css/n/npei64rnx.css';
import '../../css/f/fpfbwk8vq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pu3nx1j7v"/><path class="npei64rnx"/><path class="fpfbwk8vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:outline"} {...others} />);
}

export default Component;
