import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dk7j8dv6k.css';
import '../../css/h/hisjxxs8m.css';
import '../../css/m/m3dpa_sju.css';
import '../../css/m/mdmesrboj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="dk7j8dv6k wm-shadow"/><path class="hisjxxs8m wm-shadow"/><path class="m3dpa_sju"/><path class="mdmesrboj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-up-right"} {...others} />);
}

export default Component;
