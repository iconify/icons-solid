import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r7eh21bwh.css';
import '../../css/w/wrpl5eb5t.css';
import '../../css/q/qmvky9b5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="r7eh21bwh"/><path class="wrpl5eb5t"/><path class="qmvky9b5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:crop-image"} {...others} />);
}

export default Component;
