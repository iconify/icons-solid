import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/izai0wbqa.css';
import '../../css/e/egfgx-byu.css';
import '../../css/w/wl1ki90zo.css';
import '../../css/z/zbms0lbwh.css';
import '../../css/v/vs3_2yq5q.css';
import '../../css/p/phjb3jbcs.css';
import '../../css/y/y1j8vacer.css';
import '../../css/i/i4ieylbku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="izai0wbqa"/><path class="egfgx-byu"/><path class="wl1ki90zo wm-shine"/><path class="wm-k zbms0lbwh"/><path class="vs3_2yq5q wm-a"/><path class="phjb3jbcs"/><path class="y1j8vacer"/><path class="i4ieylbku wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:flag"} {...others} />);
}

export default Component;
