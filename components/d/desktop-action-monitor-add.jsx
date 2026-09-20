import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zv1da0btv.css';
import '../../css/p/p4ymsz41h.css';
import '../../css/k/kuyexsk0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zv1da0btv"/><path class="p4ymsz41h"/><path class="kuyexsk0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:desktop-action-monitor-add"} {...others} />);
}

export default Component;
