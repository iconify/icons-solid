import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_a9fclgc.css';
import '../../css/b/blj5kcbsm.css';

const viewBox = {"width":256,"height":150};
const content = `<path class="l_a9fclgc"/><path class="blj5kcbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:android"} {...others} />);
}

export default Component;
