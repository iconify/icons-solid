import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmrnclb5y.css';
import '../../css/j/jwtf_zb2p.css';
import '../../css/l/l3g07yg3g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fmrnclb5y"/><path class="jwtf_zb2p"/><path class="l3g07yg3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:travel-wayfinding-beach-coconut-tree"} {...others} />);
}

export default Component;
