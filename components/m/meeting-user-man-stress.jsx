import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/exdmtsbst.css';
import '../../css/c/cq0pnj2xi.css';
import '../../css/u/utvuz8bri.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="exdmtsbst"/><path class="cq0pnj2xi"/><path class="utvuz8bri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:meeting-user-man-stress"} {...others} />);
}

export default Component;
