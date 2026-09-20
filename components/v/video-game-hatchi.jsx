import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/aroz0npjy.css';
import '../../css/e/ec32yhb6f.css';
import '../../css/l/l45dc9b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="aroz0npjy"/><path class="ec32yhb6f"/><path class="l45dc9b6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-game-hatchi"} {...others} />);
}

export default Component;
