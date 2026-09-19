import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0ul-uz9o.css';
import '../../css/o/oc7c-mb5o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e0ul-uz9o"/><path class="oc7c-mb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:alarm"} {...others} />);
}

export default Component;
