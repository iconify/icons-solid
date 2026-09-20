import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w1_stzbsr.css';
import '../../css/x/x8du9qb9x.css';
import '../../css/d/dw5kuabjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w1_stzbsr"/><path class="x8du9qb9x"/><path class="dw5kuabjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:work-from-home-user-pet-cat"} {...others} />);
}

export default Component;
