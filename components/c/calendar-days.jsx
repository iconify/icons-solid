import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehoar8bab.css';
import '../../css/t/t95kfgwfc.css';
import '../../css/s/spenj8_cl.css';
import '../../css/d/dlf36tvcz.css';
import '../../css/t/ttgkzvbby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ehoar8bab wm-k"/><path class="t95kfgwfc wm-k"/><path class="spenj8_cl wm-a"/><path class="dlf36tvcz wm-a"/><path class="ttgkzvbby wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:calendar-days"} {...others} />);
}

export default Component;
