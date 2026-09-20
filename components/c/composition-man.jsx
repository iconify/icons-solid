import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oto60ts8x.css';
import '../../css/b/bo7oo35sp.css';
import '../../css/r/r_1ey_bjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="oto60ts8x"/><path class="bo7oo35sp"/><path class="r_1ey_bjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:composition-man"} {...others} />);
}

export default Component;
