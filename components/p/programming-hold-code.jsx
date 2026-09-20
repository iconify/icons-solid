import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o1y6l8rmk.css';
import '../../css/r/r1iymrb_r.css';
import '../../css/d/dwxujfbtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="o1y6l8rmk"/><path class="r1iymrb_r"/><path class="dwxujfbtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:programming-hold-code"} {...others} />);
}

export default Component;
