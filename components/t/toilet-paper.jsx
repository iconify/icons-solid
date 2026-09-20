import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tmcd2b_ry.css';
import '../../css/h/h-yvp4bkp.css';
import '../../css/s/spj6lnxch.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="tmcd2b_ry"/><path class="h-yvp4bkp"/><path class="spj6lnxch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:toilet-paper"} {...others} />);
}

export default Component;
