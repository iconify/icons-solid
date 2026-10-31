import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/chivy_bwh.css';
import '../../css/d/ds_ch_b6i.css';
import '../../css/a/ais9u1plr.css';
import '../../css/m/mjdodbblo.css';
import '../../css/n/ntpszc4ia.css';
import '../../css/q/qui9-96lo.css';
import '../../css/c/cvmdwrbst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="chivy_bwh wm-shadow"/><path class="ds_ch_b6i wm-shadow"/><path class="ais9u1plr"/><path class="mjdodbblo"/><path class="ntpszc4ia"/><path class="qui9-96lo"/><path class="cvmdwrbst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:package-open"} {...others} />);
}

export default Component;
