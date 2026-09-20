import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-91d64oc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r-91d64oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:drag-horizontal-outline"} {...others} />);
}

export default Component;
