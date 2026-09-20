import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccemtwbeg.css';
import '../../css/w/w3qhuhbpu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ccemtwbeg"/><path class="w3qhuhbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:high-voltage"} {...others} />);
}

export default Component;
