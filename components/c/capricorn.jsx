import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njfdkhbvf.css';
import '../../css/x/x54a4cc3x.css';
import '../../css/r/r07uhh1si.css';
import '../../css/d/d39qkvmat.css';
import '../../css/h/h_pt1abna.css';
import '../../css/a/am57-ibck.css';
import '../../css/m/mwgg5bcqv.css';
import '../../css/c/cvkju_8_d.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="njfdkhbvf"><path class="x54a4cc3x"/><path class="r07uhh1si"/><path class="d39qkvmat"/></g><path class="h_pt1abna"/><path class="am57-ibck"/><path class="mwgg5bcqv"/><path class="cvkju_8_d"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:capricorn"} {...others} />);
}

export default Component;
