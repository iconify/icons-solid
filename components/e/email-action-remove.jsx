import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yw3kbde_g.css';
import '../../css/i/icn76kbna.css';
import '../../css/k/khzkibcfv.css';
import '../../css/g/g69ez5b_t.css';
import '../../css/x/xbty9ccox.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yw3kbde_g"/><path class="icn76kbna"/><path class="khzkibcfv"/><path class="g69ez5b_t"/><path class="xbty9ccox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:email-action-remove"} {...others} />);
}

export default Component;
