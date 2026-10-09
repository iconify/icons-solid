import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yajgwt04s.css';
import '../../css/h/hxwjmep1l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yajgwt04s"/><path class="hxwjmep1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-curve-20"} {...others} />);
}

export default Component;
