import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn0u3gbpa.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nn0u3gbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:artboard-outline"} {...others} />);
}

export default Component;
