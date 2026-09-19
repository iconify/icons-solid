import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_0ix7bza.css';
import '../../css/y/yt0ww0arr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j_0ix7bza"/><path class="yt0ww0arr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:terminal"} {...others} />);
}

export default Component;
