import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzd46y33w.css';
import '../../css/t/t2f8pkdzv.css';
import '../../css/r/r7o-yybha.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mzd46y33w"/><path class="t2f8pkdzv"/><path class="r7o-yybha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rov-20"} {...others} />);
}

export default Component;
