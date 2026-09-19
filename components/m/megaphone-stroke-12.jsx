import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3-abubmf.css';
import '../../css/j/j9m0dh2uz.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="y3-abubmf"/><path class="j9m0dh2uz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:megaphone-stroke-12"} {...others} />);
}

export default Component;
