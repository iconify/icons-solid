import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/zawk6smbg.css';
import '../../css/y/ybuibgbim.css';
import '../../css/n/neqagcbsd.css';
import '../../css/d/d770n5yfy.css';
import '../../css/m/mbu81kbfo.css';
import '../../css/e/eq4jbwbqz.css';
import '../../css/o/ow856lbaj.css';
import '../../css/f/fgysd4b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="zawk6smbg"/><path class="ybuibgbim"/></g><path class="neqagcbsd"/><path class="d770n5yfy"/><path class="mbu81kbfo"/><path class="eq4jbwbqz"/><path class="ow856lbaj"/><path class="fgysd4b_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-2-bold-duotone"} {...others} />);
}

export default Component;
