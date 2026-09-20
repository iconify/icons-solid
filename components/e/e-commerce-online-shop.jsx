import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zuenioh2k.css';
import '../../css/d/dg3f_fyeb.css';
import '../../css/y/ynzc3ibvs.css';
import '../../css/e/ehreetbpx.css';
import '../../css/i/io0rngbwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zuenioh2k"/><path class="dg3f_fyeb"/><path class="ynzc3ibvs"/><path class="ehreetbpx"/><path class="io0rngbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:e-commerce-online-shop"} {...others} />);
}

export default Component;
