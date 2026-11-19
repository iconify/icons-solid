import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l14xmvd-t.css';
import '../../css/l/lvlrsmbgb.css';
import '../../css/w/w5p5w4_bh.css';
import '../../css/o/oa5wg7wvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l14xmvd-t"/><path class="lvlrsmbgb"/><path class="w5p5w4_bh"/><path class="oa5wg7wvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-smile-sparkle"} {...others} />);
}

export default Component;
