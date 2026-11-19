import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpako4b1g.css';
import '../../css/a/a60u09dqj.css';
import '../../css/r/re3tyr71l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hpako4b1g"/><path class="a60u09dqj"/><path class="re3tyr71l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lightbulb-sparkle"} {...others} />);
}

export default Component;
