import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmma348sl.css';
import '../../css/y/yh9xo0blb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cmma348sl"/><path class="yh9xo0blb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-up-right-20-bold"} {...others} />);
}

export default Component;
