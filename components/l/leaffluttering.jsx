import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv-xs0bgz.css';
import '../../css/h/h8m5eji-v.css';
import '../../css/g/g5ov6kbwr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tv-xs0bgz"/><path class="h8m5eji-v"/><path class="g5ov6kbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:leaffluttering"} {...others} />);
}

export default Component;
