import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jwbw5ab9c.css';
import '../../css/t/toc50hb6s.css';
import '../../css/x/x130rzb-a.css';
import '../../css/r/rqpj5qg5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jwbw5ab9c"/><path class="toc50hb6s"/><path class="x130rzb-a"/><path class="rqpj5qg5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:webcam-off-1"} {...others} />);
}

export default Component;
