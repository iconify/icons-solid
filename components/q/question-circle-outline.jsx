import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt_dvue1n.css';
import '../../css/t/ts_bt_bky.css';
import '../../css/d/du6sep0xm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lt_dvue1n"/><path class="ts_bt_bky"/><path clip-rule="evenodd" class="du6sep0xm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:question-circle-outline"} {...others} />);
}

export default Component;
