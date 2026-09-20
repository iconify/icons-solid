import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wak1glb2p.css';
import '../../css/f/fq4_qkb3m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wak1glb2p"/><path class="fq4_qkb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:yellow-heart"} {...others} />);
}

export default Component;
