import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncnjnqr9z.css';
import '../../css/s/slvmpnboj.css';
import '../../css/y/y19r1qfdk.css';
import '../../css/o/omuskbcak.css';
import '../../css/n/ntg30nbhg.css';
import '../../css/y/yl7unqbbk.css';
import '../../css/p/p2p3wsbbv.css';
import '../../css/f/f30p36brj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ncnjnqr9z"/><path class="slvmpnboj"/><path class="y19r1qfdk"/><path class="omuskbcak"/><path class="ntg30nbhg"/><path class="yl7unqbbk"/><path class="p2p3wsbbv"/><path class="f30p36brj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cilium-tetragon"} {...others} />);
}

export default Component;
