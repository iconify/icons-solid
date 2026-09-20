import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8s5c1zub.css';
import '../../css/r/rlm82lo4o.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="t8s5c1zub"/><path class="rlm82lo4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:arrow-down-circle"} {...others} />);
}

export default Component;
