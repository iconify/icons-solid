import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jelsw2bbk.css';
import '../../css/p/phs9k_bln.css';
import '../../css/t/tjav81vfv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jelsw2bbk"/><path class="phs9k_bln"/><path class="tjav81vfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamyfin-dark"} {...others} />);
}

export default Component;
