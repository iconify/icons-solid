import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3rpqtqvu.css';

const viewBox = {"width":1537,"height":1537};
const content = `<path class="k3rpqtqvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:wind-direction"} {...others} />);
}

export default Component;
