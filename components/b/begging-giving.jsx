import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kzem0p7_u.css';
import '../../css/t/t0pymt0bq.css';
import '../../css/i/ikmve7dyu.css';
import '../../css/m/mxyg-1bkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="kzem0p7_u"/><path class="t0pymt0bq"/><path class="ikmve7dyu"/><path class="mxyg-1bkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:begging-giving"} {...others} />);
}

export default Component;
