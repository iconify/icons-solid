import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hqucknv-v.css';
import '../../css/e/eksh7m4sv.css';
import '../../css/y/y3rbx0boc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hqucknv-v"/><path class="eksh7m4sv"/><path class="y3rbx0boc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:resize-expand-arrow"} {...others} />);
}

export default Component;
