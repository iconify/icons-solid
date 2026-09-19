import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0s0bu_wi.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="h0s0bu_wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:wine-glass-empty"} {...others} />);
}

export default Component;
