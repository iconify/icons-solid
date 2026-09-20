import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn-gz2b-c.css';
import '../../css/g/g8uv-0b2d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pn-gz2b-c"/><path class="g8uv-0b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:raised-back-of-hand-light-skin-tone"} {...others} />);
}

export default Component;
