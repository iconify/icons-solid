import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r_a637beg.css';
import '../../css/u/uclb-kbwz.css';
import '../../css/m/m_oz3-fiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r_a637beg"/><path class="uclb-kbwz"/><path class="m_oz3-fiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:famous-character-pokemon"} {...others} />);
}

export default Component;
