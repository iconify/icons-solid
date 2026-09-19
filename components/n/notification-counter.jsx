import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crncvzb-e.css';
import '../../css/t/tn0_q5b3t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="crncvzb-e"/><circle class="tn0_q5b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:notification-counter"} {...others} />);
}

export default Component;
