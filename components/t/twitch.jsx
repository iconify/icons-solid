import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm7fs1b4b.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="hm7fs1b4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:twitch"} {...others} />);
}

export default Component;
