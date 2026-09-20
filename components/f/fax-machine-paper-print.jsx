import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yy0kmdbfn.css';
import '../../css/b/byeqgth4o.css';
import '../../css/d/d-mdo3b_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yy0kmdbfn"/><path class="byeqgth4o"/><path class="d-mdo3b_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:fax-machine-paper-print"} {...others} />);
}

export default Component;
