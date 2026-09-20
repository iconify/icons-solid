import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvbcs1z_d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rvbcs1z_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:chevron-right"} {...others} />);
}

export default Component;
