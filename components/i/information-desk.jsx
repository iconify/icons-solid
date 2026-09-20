import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wy9y5naby.css';
import '../../css/q/qt392mi1w.css';
import '../../css/k/k4p-mx6zk.css';
import '../../css/d/d9tj3eb5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wy9y5naby"/><path class="qt392mi1w"/><path class="k4p-mx6zk"/><path class="d9tj3eb5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:information-desk"} {...others} />);
}

export default Component;
