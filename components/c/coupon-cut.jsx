import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tvkebjb9w.css';
import '../../css/w/w6crtkbrj.css';
import '../../css/d/d351sz2ia.css';
import '../../css/a/a9al5sbpc.css';
import '../../css/e/eq1_gxbno.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="tvkebjb9w"/><path class="w6crtkbrj"/><path class="d351sz2ia"/><path class="a9al5sbpc"/><path class="eq1_gxbno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:coupon-cut"} {...others} />);
}

export default Component;
