import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lpac-9ajf.css';
import '../../css/j/jgqkd-baj.css';
import '../../css/e/emg6eia4o.css';
import '../../css/x/xe-i4bc_y.css';
import '../../css/v/vsk5ec_fm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lpac-9ajf"/><path class="jgqkd-baj"/><path class="emg6eia4o"/><path class="xe-i4bc_y"/><path class="vsk5ec_fm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:picture-polaroid-four"} {...others} />);
}

export default Component;
