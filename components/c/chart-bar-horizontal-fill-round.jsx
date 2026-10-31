import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfp_h_bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfp_h_bpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-bar-horizontal-fill-round"} {...others} />);
}

export default Component;
