import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_g1983dh.css';
import '../../css/j/jzkzakb6k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z_g1983dh"/><path class="jzkzakb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leftwards-hand-medium-light-skin-tone"} {...others} />);
}

export default Component;
