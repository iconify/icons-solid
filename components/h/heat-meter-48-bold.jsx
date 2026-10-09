import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df474cc-n.css';
import '../../css/y/yxgyrcb-d.css';
import '../../css/x/xqhhzqtle.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="df474cc-n"/><path class="yxgyrcb-d"/><path class="xqhhzqtle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-meter-48-bold"} {...others} />);
}

export default Component;
