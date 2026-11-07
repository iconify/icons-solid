import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr3dwwbcg.css';
import '../../css/k/ki68ofbgn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lr3dwwbcg"/><path class="ki68ofbgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:filter-close-bold-duotone"} {...others} />);
}

export default Component;
