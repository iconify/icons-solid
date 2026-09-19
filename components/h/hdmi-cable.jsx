import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hzc1kcbof.css';
import '../../css/r/rnav9ouxi.css';
import '../../css/n/namk9nbdx.css';
import '../../css/m/msa-m__6p.css';
import '../../css/u/urt9ycbgn.css';
import '../../css/c/cv2dyvbtq.css';
import '../../css/w/wgv69nbef.css';
import '../../css/m/myi5b_oad.css';
import '../../css/q/qesy6efmi.css';
import '../../css/i/ixtmd3bqy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="hzc1kcbof"/><path class="rnav9ouxi"/><path class="namk9nbdx"/><path class="msa-m__6p"/><path class="urt9ycbgn"/><path class="cv2dyvbtq"/><path class="wgv69nbef"/><path class="myi5b_oad"/><path class="qesy6efmi"/><path class="ixtmd3bqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hdmi-cable"} {...others} />);
}

export default Component;
