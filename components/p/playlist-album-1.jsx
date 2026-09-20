import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v6thdh7bf.css';
import '../../css/p/pj5v24aaj.css';
import '../../css/f/fiihxccoc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="v6thdh7bf"/><path class="pj5v24aaj"/><path class="fiihxccoc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:playlist-album-1"} {...others} />);
}

export default Component;
