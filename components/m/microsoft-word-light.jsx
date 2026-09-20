import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yftarabyl.css';
import '../../css/q/qxihk5bwn.css';
import '../../css/k/knu7vdbvo.css';
import '../../css/o/ofhs6z3pm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yftarabyl"/><path class="qxihk5bwn"/><path class="knu7vdbvo"/><path class="ofhs6z3pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-word-light"} {...others} />);
}

export default Component;
