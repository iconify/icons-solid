import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sezfl3bth.css';
import '../../css/g/gdt76bcot.css';
import '../../css/r/r4tzj-bic.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sezfl3bth"/><path class="gdt76bcot"/><path class="r4tzj-bic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:office-business-card"} {...others} />);
}

export default Component;
