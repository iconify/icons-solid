import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw_tfybwx.css';
import '../../css/w/w5lorqb0k.css';
import '../../css/k/kc_4boqkx.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qw_tfybwx"/><path class="w5lorqb0k"/><path class="kc_4boqkx"/><path class="ygtv74bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-battery-alert-48-bold"} {...others} />);
}

export default Component;
