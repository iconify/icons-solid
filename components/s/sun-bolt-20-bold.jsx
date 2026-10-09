import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/punxieblh.css';
import '../../css/z/zi252sbbj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="punxieblh"/><path class="zi252sbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-bolt-20-bold"} {...others} />);
}

export default Component;
