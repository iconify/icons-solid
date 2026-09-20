import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gjccdsbql.css';
import '../../css/s/sqzg-pbzs.css';
import '../../css/d/dxs3hib_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gjccdsbql"/><path class="sqzg-pbzs"/><path class="dxs3hib_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-metaphor-lucky-cat"} {...others} />);
}

export default Component;
