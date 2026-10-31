import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rj_8g4vod.css';
import '../../css/a/ajag6ggvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rj_8g4vod"/><path class="ajag6ggvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:medal-duocolor-round"} {...others} />);
}

export default Component;
