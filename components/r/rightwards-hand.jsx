import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy1nb7ojd.css';
import '../../css/n/nw_fw7zya.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cy1nb7ojd"/><path class="nw_fw7zya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rightwards-hand"} {...others} />);
}

export default Component;
