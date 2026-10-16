import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr0xwjb7c.css';
import '../../css/p/pv2lfsb0a.css';
import '../../css/v/v09rlcbxy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lr0xwjb7c"/><path class="pv2lfsb0a"/><path class="v09rlcbxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-extinguisher-20-bold"} {...others} />);
}

export default Component;
