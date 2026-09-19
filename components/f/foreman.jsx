import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz7dlcc-l.css';
import '../../css/e/enkicgbla.css';
import '../../css/i/isfszej6d.css';
import '../../css/k/ky3w5_bub.css';
import '../../css/x/xbsl-kcev.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="tz7dlcc-l"><path class="enkicgbla"/><path class="isfszej6d"/><path class="ky3w5_bub"/><path class="xbsl-kcev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:foreman"} {...others} />);
}

export default Component;
