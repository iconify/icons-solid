import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blbxstv4s.css';
import '../../css/y/y-zi9_bzo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="blbxstv4s"/><path class="y-zi9_bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:large-orange-diamond"} {...others} />);
}

export default Component;
