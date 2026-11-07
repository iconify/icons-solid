import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/p/pyne1kb6h.css';
import '../../css/u/u3ek8-bwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path class="pyne1kb6h"/><path class="u3ek8-bwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:check-read-bold-duotone"} {...others} />);
}

export default Component;
