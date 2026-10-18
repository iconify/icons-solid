import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er8a602go.css';
import '../../css/w/w6rk5mb9y.css';
import '../../css/d/df5c527xr.css';
import '../../css/q/qt3qyac8c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="er8a602go"/><path class="w6rk5mb9y"/><path class="df5c527xr"/><path class="qt3qyac8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cycle-lane-20"} {...others} />);
}

export default Component;
