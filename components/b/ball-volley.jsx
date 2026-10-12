import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xodi-9www.css';
import '../../css/a/asdfevomv.css';
import '../../css/i/i2jo2_93e.css';
import '../../css/k/khdkximwp.css';
import '../../css/s/sulvnfb-f.css';
import '../../css/f/fzbplbbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xodi-9www"/><path class="asdfevomv"/><path class="i2jo2_93e"/><path class="khdkximwp"/><path class="sulvnfb-f"/><path class="fzbplbbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ball-volley"} {...others} />);
}

export default Component;
