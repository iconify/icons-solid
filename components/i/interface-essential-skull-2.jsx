import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf06j_bww.css';
import '../../css/r/rsco9dbox.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bf06j_bww"/><path class="rsco9dbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-skull-2"} {...others} />);
}

export default Component;
