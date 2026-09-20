import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a44w15qhy.css';
import '../../css/q/qxmvrccee.css';
import '../../css/y/y_1f2zbtu.css';
import '../../css/k/kf1b13u8c.css';
import '../../css/j/jae66mr1q.css';
import '../../css/k/kcec5wbft.css';
import '../../css/x/x8620o59s.css';

const viewBox = {"width":128,"height":129};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a44w15qhy"/><path clip-rule="evenodd" class="qxmvrccee"/><path class="y_1f2zbtu"/><path class="kf1b13u8c"/><path class="jae66mr1q"/><path class="kcec5wbft"/><path class="x8620o59s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:terragrunt"} {...others} />);
}

export default Component;
