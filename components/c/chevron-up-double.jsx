import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue_x4m1-r.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="ue_x4m1-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:chevron-up-double"} {...others} />);
}

export default Component;
