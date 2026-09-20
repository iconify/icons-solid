import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/urdc96bbo.css';
import '../../css/y/yrwyo22db.css';
import '../../css/a/awbyonb8h.css';
import '../../css/r/r_vybwbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="urdc96bbo"/><path class="yrwyo22db"/><path class="awbyonb8h"/><path class="r_vybwbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:presentation-projector-1"} {...others} />);
}

export default Component;
