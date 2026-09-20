import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d5nequhdi.css';
import '../../css/u/ujk-8v4-a.css';
import '../../css/u/u0ivgpm6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="d5nequhdi"/><path class="ujk-8v4-a"/><path class="u0ivgpm6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:famous-character-pokemon"} {...others} />);
}

export default Component;
