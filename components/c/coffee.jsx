import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv8z3-74d.css';

const viewBox = {"width":697,"height":768};
const content = `<path class="yv8z3-74d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:coffee"} {...others} />);
}

export default Component;
