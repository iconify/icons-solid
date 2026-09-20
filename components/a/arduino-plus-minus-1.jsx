import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fdnb98b8v.css';
import '../../css/u/u-m6v9beh.css';
import '../../css/e/ezo8joblh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fdnb98b8v"/><path class="u-m6v9beh"/><path class="ezo8joblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:arduino-plus-minus-1"} {...others} />);
}

export default Component;
