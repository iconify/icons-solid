import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wsabpzbeh.css';
import '../../css/i/i18t-xexp.css';
import '../../css/u/uybhwbbak.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wsabpzbeh"/><path class="i18t-xexp"/><path class="uybhwbbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:card-game-symbols"} {...others} />);
}

export default Component;
