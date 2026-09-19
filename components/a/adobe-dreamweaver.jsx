import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jevtp060j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jevtp060j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:adobe-dreamweaver"} {...others} />);
}

export default Component;
