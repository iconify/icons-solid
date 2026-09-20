import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v70alobhi.css';
import '../../css/g/g8uv-0b2d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="v70alobhi"/><path class="g8uv-0b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:raised-back-of-hand-medium-skin-tone"} {...others} />);
}

export default Component;
