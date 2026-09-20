import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z99vifmop.css';
import '../../css/m/mrwtbc_ba.css';
import '../../css/v/v76fh54tr.css';
import '../../css/b/bxqz_zugs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="z99vifmop"/><path class="mrwtbc_ba"/><path class="v76fh54tr"/><path class="bxqz_zugs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:show-hat-magician-1"} {...others} />);
}

export default Component;
