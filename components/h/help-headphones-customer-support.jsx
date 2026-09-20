import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/khi4xmbpe.css';
import '../../css/d/dfxun4bwh.css';
import '../../css/o/oaveh2bmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="khi4xmbpe"/><path class="dfxun4bwh"/><path class="oaveh2bmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:help-headphones-customer-support"} {...others} />);
}

export default Component;
