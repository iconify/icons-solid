import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v_x0netdn.css';
import '../../css/o/ohqjceyzq.css';
import '../../css/u/uw1b0vb0b.css';
import '../../css/q/qibn-ebyb.css';
import '../../css/t/t6strnb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="v_x0netdn"/><path class="ohqjceyzq"/><path class="uw1b0vb0b"/><path class="qibn-ebyb"/><path class="t6strnb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:receipt-view-pricing"} {...others} />);
}

export default Component;
