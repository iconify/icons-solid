import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf5cnuy5b.css';
import '../../css/b/bi5-4wjkp.css';
import '../../css/i/ip-t4nauu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zf5cnuy5b"/><path class="bi5-4wjkp"/><path class="ip-t4nauu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:steel-mill-20-bold"} {...others} />);
}

export default Component;
