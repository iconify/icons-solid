import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrcn26bdl.css';
import '../../css/f/fv-s_bb2f.css';
import '../../css/d/dvw_0es0u.css';
import '../../css/u/ut-93677b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yrcn26bdl"/><path class="fv-s_bb2f"/><path class="dvw_0es0u"/><circle class="ut-93677b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:caduceus"} {...others} />);
}

export default Component;
