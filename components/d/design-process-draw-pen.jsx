import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o25gd6bvp.css';
import '../../css/v/vhqxg0bai.css';
import '../../css/u/ue554cbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="o25gd6bvp"/><path class="vhqxg0bai"/><path class="ue554cbvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:design-process-draw-pen"} {...others} />);
}

export default Component;
