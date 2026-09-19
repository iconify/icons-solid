import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjkafkbvo.css';
import '../../css/b/b6ueueufz.css';
import '../../css/n/nrqcwibjb.css';
import '../../css/e/emew_ipme.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qjkafkbvo"/><circle class="b6ueueufz"/><path class="nrqcwibjb"/><path class="emew_ipme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:global-loan-and-trial"} {...others} />);
}

export default Component;
