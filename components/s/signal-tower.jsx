import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9yoghtcm.css';
import '../../css/a/adzimibor.css';
import '../../css/o/o6m94c45h.css';
import '../../css/c/cffm_3rih.css';
import '../../css/m/mj13kebfk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><circle class="r9yoghtcm"/><path class="adzimibor"/><path class="o6m94c45h"/><path clip-rule="evenodd" class="cffm_3rih"/><path class="mj13kebfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:signal-tower"} {...others} />);
}

export default Component;
