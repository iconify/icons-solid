import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a27au3gxx.css';
import '../../css/z/zt7ow5bcu.css';
import '../../css/y/yaf3voa5l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a27au3gxx"/><path class="zt7ow5bcu"/><path class="yaf3voa5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-purifier-20-bold"} {...others} />);
}

export default Component;
