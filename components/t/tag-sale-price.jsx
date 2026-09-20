import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zw6nc7b0r.css';
import '../../css/o/onm8dobqc.css';
import '../../css/l/l3pucg3gf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zw6nc7b0r"/><path class="onm8dobqc"/><path class="l3pucg3gf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:tag-sale-price"} {...others} />);
}

export default Component;
