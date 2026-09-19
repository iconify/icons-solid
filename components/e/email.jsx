import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/weqv4ab8t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="weqv4ab8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:email"} {...others} />);
}

export default Component;
