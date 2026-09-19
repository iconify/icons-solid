import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpcu2565j.css';
import '../../css/r/rs94qeblu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cpcu2565j"/><path class="rs94qeblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:stickies"} {...others} />);
}

export default Component;
