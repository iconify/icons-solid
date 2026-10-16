import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx6vej9mh.css';
import '../../css/q/qjh6c2bbs.css';
import '../../css/x/xhkmldn9e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rx6vej9mh"/><path class="qjh6c2bbs"/><path class="xhkmldn9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lockout-20"} {...others} />);
}

export default Component;
