import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc9f3eygk.css';
import '../../css/n/nw_fw7zya.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xc9f3eygk"/><path class="nw_fw7zya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rightwards-hand-dark-skin-tone"} {...others} />);
}

export default Component;
