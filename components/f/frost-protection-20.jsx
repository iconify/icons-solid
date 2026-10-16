import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-myk9bcg.css';
import '../../css/w/wpelx51ac.css';
import '../../css/q/qpgkwijtd.css';
import '../../css/o/ow_cjkbpg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a-myk9bcg"/><path class="wpelx51ac"/><path class="qpgkwijtd"/><path class="ow_cjkbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frost-protection-20"} {...others} />);
}

export default Component;
