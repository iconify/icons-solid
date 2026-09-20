import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dylyql1lm.css';
import '../../css/r/rlud3tbdv.css';
import '../../css/f/f_ka1ebup.css';
import '../../css/e/ep4epin0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dylyql1lm"/><path class="rlud3tbdv"/><path class="f_ka1ebup"/><path class="ep4epin0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:hand-tablet-icons-2"} {...others} />);
}

export default Component;
