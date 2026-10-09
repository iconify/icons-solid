import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df7n374tg.css';
import '../../css/a/aouq01bvp.css';
import '../../css/m/mzeei2eeo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="df7n374tg"/><path class="aouq01bvp"/><path class="mzeei2eeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:certificate-20-bold"} {...others} />);
}

export default Component;
