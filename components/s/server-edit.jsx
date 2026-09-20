import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/muq09cbqz.css';
import '../../css/v/vot250bpi.css';
import '../../css/k/knt4apnld.css';
import '../../css/m/mk8d_nbic.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="muq09cbqz"/><path class="vot250bpi"/><path class="knt4apnld"/><path class="mk8d_nbic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:server-edit"} {...others} />);
}

export default Component;
