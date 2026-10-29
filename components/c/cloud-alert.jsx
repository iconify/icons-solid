import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hzh2q3cwl.css';
import '../../css/b/b1vsrubsr.css';
import '../../css/h/h2y-j0bih.css';
import '../../css/e/er-e8dbdy.css';
import '../../css/d/dyzezmbrp.css';
import '../../css/w/wn8-cf_gg.css';
import '../../css/v/v5l5yubmu.css';
import '../../css/t/txto49juz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hzh2q3cwl wm-k"/><path class="b1vsrubsr wm-k"/><path class="h2y-j0bih wm-k"/><path class="er-e8dbdy wm-shine"/><path class="dyzezmbrp wm-k"/><path class="wm-k wn8-cf_gg"/><path class="v5l5yubmu wm-k"/><path class="txto49juz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cloud-alert"} {...others} />);
}

export default Component;
