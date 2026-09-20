import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o58aldlyn.css';
import '../../css/p/pai9iqpjo.css';
import '../../css/p/p7m0yt11w.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="o58aldlyn"/><path class="pai9iqpjo"/><path class="p7m0yt11w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:escalator-ascend-person"} {...others} />);
}

export default Component;
