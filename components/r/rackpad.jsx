import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgic1j72k.css';
import '../../css/p/pvghoxb6h.css';
import '../../css/a/a08ugh7hh.css';
import '../../css/w/wgez2acsd.css';
import '../../css/m/mkumxdvsa.css';
import '../../css/z/zxtgzqbpc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xgic1j72k"/><path class="pvghoxb6h"/><path class="a08ugh7hh"/><path class="wgez2acsd"/><path class="mkumxdvsa"/><path class="zxtgzqbpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rackpad"} {...others} />);
}

export default Component;
