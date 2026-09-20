import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n7xu60bqe.css';
import '../../css/e/e_q_hachl.css';
import '../../css/b/bmob-8b2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n7xu60bqe"/><path class="e_q_hachl"/><path class="bmob-8b2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:safety-fire-extinguisher"} {...others} />);
}

export default Component;
