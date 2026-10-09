import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9x-w4s1u.css';
import '../../css/o/omx4q5uyw.css';
import '../../css/x/xqh2mbcfy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u9x-w4s1u"/><path class="omx4q5uyw"/><path class="xqh2mbcfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-truck-20-bold"} {...others} />);
}

export default Component;
