import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e1hupvzta.css';
import '../../css/o/ovydmbcol.css';
import '../../css/q/q53q1l0-b.css';
import '../../css/b/b06685bik.css';
import '../../css/x/xvufhjbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="e1hupvzta"/><path class="ovydmbcol"/><path class="q53q1l0-b"/><path class="b06685bik"/><path class="xvufhjbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-management-team-up"} {...others} />);
}

export default Component;
