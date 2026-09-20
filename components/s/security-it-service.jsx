import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e05xtxd5b.css';
import '../../css/k/krxcl4xgx.css';
import '../../css/z/zps3a9brs.css';
import '../../css/g/gr3pn8_ar.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="e05xtxd5b"/><path class="krxcl4xgx"/><path class="zps3a9brs"/><path class="gr3pn8_ar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:security-it-service"} {...others} />);
}

export default Component;
