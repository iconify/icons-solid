import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw5_x3b-j.css';
import '../../css/j/jzkzakb6k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zw5_x3b-j"/><path class="jzkzakb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leftwards-hand-light-skin-tone"} {...others} />);
}

export default Component;
