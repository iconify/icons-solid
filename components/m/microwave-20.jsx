import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_j5rbcgv.css';
import '../../css/x/xw_k98btt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v_j5rbcgv"/><path class="xw_k98btt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microwave-20"} {...others} />);
}

export default Component;
