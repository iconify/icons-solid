import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl1gjukeh.css';
import '../../css/p/pij3i9btg.css';
import '../../css/v/v-57kdh_g.css';
import '../../css/z/zym60lbig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gl1gjukeh"/><circle class="pij3i9btg"/><path class="v-57kdh_g"/><circle class="zym60lbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:parachute"} {...others} />);
}

export default Component;
