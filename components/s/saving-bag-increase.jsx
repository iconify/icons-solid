import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sbto5_u1s.css';
import '../../css/d/daz3bxb2w.css';
import '../../css/t/tj-_z79bp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sbto5_u1s"/><path class="daz3bxb2w"/><path class="tj-_z79bp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:saving-bag-increase"} {...others} />);
}

export default Component;
