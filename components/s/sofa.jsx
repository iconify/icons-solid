import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-gmb3b4h.css';
import '../../css/d/d0_ymbbdf.css';
import '../../css/m/mcjoxrq5f.css';
import '../../css/u/u04b8vbgc.css';
import '../../css/x/x6i83wbqa.css';
import '../../css/p/pm-jynb1i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="w-gmb3b4h"/><path clip-rule="evenodd" class="d0_ymbbdf"/><path clip-rule="evenodd" class="mcjoxrq5f"/><path class="u04b8vbgc"/><path class="x6i83wbqa"/><path class="pm-jynb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:sofa"} {...others} />);
}

export default Component;
