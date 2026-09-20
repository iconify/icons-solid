import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcw4a_b_u.css';
import '../../css/z/zo5mbwbuz.css';
import '../../css/u/ue-hs4bef.css';
import '../../css/r/r1tp4rbih.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zcw4a_b_u"/><path class="zo5mbwbuz"/><path class="ue-hs4bef"/><path class="r1tp4rbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:search-category"} {...others} />);
}

export default Component;
