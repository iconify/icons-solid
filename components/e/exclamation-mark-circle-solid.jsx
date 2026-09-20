import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7sif6b_m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z7sif6b_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:exclamation-mark-circle-solid"} {...others} />);
}

export default Component;
