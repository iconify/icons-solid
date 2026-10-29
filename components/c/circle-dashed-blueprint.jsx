import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j_mifyvle.css';
import '../../css/d/d055-mijy.css';
import '../../css/o/o-fwz22nq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="j_mifyvle wm-deco"/><path class="d055-mijy wm-deco"/><path class="o-fwz22nq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-dashed-blueprint"} {...others} />);
}

export default Component;
