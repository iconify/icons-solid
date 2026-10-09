import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht5i-fb7m.css';
import '../../css/p/pa8jkb1da.css';
import '../../css/c/cfktgscfo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ht5i-fb7m"/><path class="pa8jkb1da"/><path class="cfktgscfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:milk-carton-20"} {...others} />);
}

export default Component;
