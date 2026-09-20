import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j4unv0bwc.css';
import '../../css/p/piqps_eog.css';
import '../../css/t/t3uk6hb6i.css';
import '../../css/h/hd26bt87f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="j4unv0bwc"/><path class="piqps_eog"/><path class="t3uk6hb6i"/><path class="hd26bt87f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:monetization-bill-magnet"} {...others} />);
}

export default Component;
