import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q1nhjcbcq.css';
import '../../css/p/p3h83ob2l.css';
import '../../css/n/nlk--ac8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q1nhjcbcq"/><path class="p3h83ob2l"/><path class="nlk--ac8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:phone-actions-off"} {...others} />);
}

export default Component;
