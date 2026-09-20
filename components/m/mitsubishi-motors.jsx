import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqeoggbkc.css';
import '../../css/v/vw-qm_bri.css';
import '../../css/q/q23_x9ebp.css';

const viewBox = {"width":205.935,"height":264.583};
const content = `<path class="lqeoggbkc"/><path class="vw-qm_bri"/><path class="q23_x9ebp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mitsubishi-motors"} {...others} />);
}

export default Component;
