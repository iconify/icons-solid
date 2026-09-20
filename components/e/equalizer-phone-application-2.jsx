import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/puw9pfmix.css';
import '../../css/r/rxtl2ibrn.css';
import '../../css/a/ao_0jqt1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="puw9pfmix"/><path class="rxtl2ibrn"/><path class="ao_0jqt1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:equalizer-phone-application-2"} {...others} />);
}

export default Component;
