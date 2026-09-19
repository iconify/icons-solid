import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abx036wst.css';
import '../../css/n/nv2jz3bhl.css';
import '../../css/l/l3pzy9htd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="abx036wst"/><path class="nv2jz3bhl"/><path class="l3pzy9htd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-car"} {...others} />);
}

export default Component;
