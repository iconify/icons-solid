import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdh6xhb5m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rdh6xhb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:chevron-with-circle-down"} {...others} />);
}

export default Component;
