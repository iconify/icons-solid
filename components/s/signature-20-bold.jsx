import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqsb49kgr.css';
import '../../css/a/ahzc34b2e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lqsb49kgr"/><path class="ahzc34b2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signature-20-bold"} {...others} />);
}

export default Component;
