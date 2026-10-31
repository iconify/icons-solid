import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzlf75b0h.css';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y2gu27b6a.css';
import '../../css/r/rtc7ehbtl.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/b/bg1fe5mne.css';
import '../../css/v/vx2pesbqi.css';

const viewBox = {"width":301,"height":151};
const content = `<defs><path id="SVGJRuOvcot" class="hzlf75b0h"/></defs><g class="bi12bsetm"><path class="y2gu27b6a"/><path class="rtc7ehbtl"/><mask id="SVGMVPpHcRl" class="n1mjunbsu"><use href="#SVGJRuOvcot"/></mask><path mask="url(#SVGMVPpHcRl)" class="bg1fe5mne"/><path class="vx2pesbqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sb"} {...others} />);
}

export default Component;
