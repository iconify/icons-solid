import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/no3bhqb-g.css';
import '../../css/s/sjjp336kj.css';
import '../../css/e/e1-0dm54i.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="no3bhqb-g"/><path class="sjjp336kj"/><path class="e1-0dm54i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:design-process-draw-pen"} {...others} />);
}

export default Component;
