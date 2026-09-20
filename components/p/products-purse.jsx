import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hmzy87vxc.css';
import '../../css/s/sif8embcq.css';
import '../../css/j/jft-c8bfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hmzy87vxc"/><path class="sif8embcq"/><path class="jft-c8bfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:products-purse"} {...others} />);
}

export default Component;
