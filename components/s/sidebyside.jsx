import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwqnu5bwd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rwqnu5bwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:sidebyside"} {...others} />);
}

export default Component;
