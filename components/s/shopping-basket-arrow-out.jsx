import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w7poixe4p.css';
import '../../css/x/xjt4mmbhg.css';
import '../../css/y/ypms94bds.css';
import '../../css/h/hwt9rfbqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w7poixe4p"/><path class="xjt4mmbhg"/><path class="ypms94bds"/><path class="hwt9rfbqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shopping-basket-arrow-out"} {...others} />);
}

export default Component;
