import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tdzzo8b5j.css';
import '../../css/z/zyvddlb3n.css';
import '../../css/r/rum9obbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="tdzzo8b5j"/><path class="zyvddlb3n"/><path class="rum9obbsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shopping-bag-sad"} {...others} />);
}

export default Component;
