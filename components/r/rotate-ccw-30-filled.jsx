import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bazxsibde.css';
import '../../css/r/ri5_0i_ew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bazxsibde"/><path class="ri5_0i_ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rotate-ccw-30-filled"} {...others} />);
}

export default Component;
