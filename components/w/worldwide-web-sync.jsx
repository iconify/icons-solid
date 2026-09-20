import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eovavrbyd.css';
import '../../css/b/beua1hduq.css';
import '../../css/t/tzalnc8mr.css';
import '../../css/n/nunh1nbfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="eovavrbyd"/><path class="beua1hduq"/><path class="tzalnc8mr"/><path class="nunh1nbfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:worldwide-web-sync"} {...others} />);
}

export default Component;
