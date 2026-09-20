import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b4jwp893i.css';
import '../../css/m/mz8zz6b9f.css';
import '../../css/b/bu8aiwuof.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="b4jwp893i"/><path class="mz8zz6b9f"/><path class="bu8aiwuof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:volume-control-down-1"} {...others} />);
}

export default Component;
