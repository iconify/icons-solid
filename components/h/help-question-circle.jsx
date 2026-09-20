import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f63ef3j3q.css';
import '../../css/e/ehl97xb1v.css';
import '../../css/l/l0hes9c6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f63ef3j3q"/><path class="ehl97xb1v"/><path class="l0hes9c6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:help-question-circle"} {...others} />);
}

export default Component;
