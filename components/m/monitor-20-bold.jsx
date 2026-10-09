import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq1w_vbdk.css';
import '../../css/m/mmw4hdxlw.css';
import '../../css/c/c_lk71bhx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mq1w_vbdk"/><path class="mmw4hdxlw"/><path class="c_lk71bhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-20-bold"} {...others} />);
}

export default Component;
