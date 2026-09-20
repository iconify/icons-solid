import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ikl747bil.css';
import '../../css/o/ovuwqmcap.css';
import '../../css/d/dkb-t3bph.css';
import '../../css/z/znhoneb8n.css';
import '../../css/a/as5ptpbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ikl747bil"/><path class="ovuwqmcap"/><path class="dkb-t3bph"/><path class="znhoneb8n"/><path class="as5ptpbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:accounting-calculator"} {...others} />);
}

export default Component;
