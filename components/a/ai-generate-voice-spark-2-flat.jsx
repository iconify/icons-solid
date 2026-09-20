import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uumdjbb7e.css';
import '../../css/g/gph90cbak.css';
import '../../css/o/ojg46yc6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="uumdjbb7e"/><path class="gph90cbak"/><path class="ojg46yc6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-generate-voice-spark-2-flat"} {...others} />);
}

export default Component;
