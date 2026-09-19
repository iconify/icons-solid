import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_wl4muaa.css';
import '../../css/s/sfl56ghid.css';
import '../../css/q/qvc-_-b4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j_wl4muaa"/><path class="sfl56ghid"/><path class="qvc-_-b4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sun-cloud-fast-wind-01"} {...others} />);
}

export default Component;
