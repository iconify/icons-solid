import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a77l2yh7e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a77l2yh7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:dots-two-horizontal"} {...others} />);
}

export default Component;
