import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/z/zfbbqcgcv.css';
import '../../css/q/qqs13mbot.css';
import '../../css/e/ecic9_f9z.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGDM1w6dIU" width="21" height="19" x=".774" y="2.367" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="zfbbqcgcv"/><path clip-rule="evenodd" class="qqs13mbot"/></mask><path clip-rule="evenodd" mask="url(#SVGDM1w6dIU)" class="ecic9_f9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:done-fill"} {...others} />);
}

export default Component;
