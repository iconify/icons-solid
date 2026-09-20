import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yrcchbbji.css';
import '../../css/j/jdbe-woge.css';
import '../../css/f/f-59ph3vy.css';
import '../../css/x/x4hixr_1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yrcchbbji"/><path class="jdbe-woge"/><path class="f-59ph3vy"/><path class="x4hixr_1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-cash-idea"} {...others} />);
}

export default Component;
