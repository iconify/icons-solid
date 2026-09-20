import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oysn7k5ti.css';
import '../../css/x/xbs_vnzhd.css';
import '../../css/u/utnt0dbeq.css';
import '../../css/h/hk-r7ubdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="oysn7k5ti"/><path class="xbs_vnzhd"/><path class="utnt0dbeq"/><path class="hk-r7ubdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:server-lock"} {...others} />);
}

export default Component;
