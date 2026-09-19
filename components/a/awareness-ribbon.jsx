import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3y1o4bjb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f3y1o4bjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:awareness-ribbon"} {...others} />);
}

export default Component;
