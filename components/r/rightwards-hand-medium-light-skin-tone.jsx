import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jaot0vf8m.css';
import '../../css/n/nw_fw7zya.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jaot0vf8m"/><path class="nw_fw7zya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rightwards-hand-medium-light-skin-tone"} {...others} />);
}

export default Component;
