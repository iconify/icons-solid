import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7cjqrbqv.css';
import '../../css/f/fq4_qkb3m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="m7cjqrbqv"/><path class="fq4_qkb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-heart"} {...others} />);
}

export default Component;
