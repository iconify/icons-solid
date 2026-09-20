import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pw8owgtbs.css';
import '../../css/t/tvp1jib9y.css';
import '../../css/r/roucdszvd.css';
import '../../css/s/sgw5l6b8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pw8owgtbs"/><path class="tvp1jib9y"/><path class="roucdszvd"/><path class="sgw5l6b8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cd-player-disc"} {...others} />);
}

export default Component;
